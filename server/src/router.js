import GraphHTTP from 'express-graphql';
import Schema from './schemas/graphql';
import jwt from 'jsonwebtoken';
import ejwt from 'express-jwt/lib';
import bcrypt from 'bcrypt';

import User from './schemas/db/user';
import Config from "./config";

export default function router(app) {
    /* AUTH */
    const auth = ejwt({
        secret: Config.SECRET,
        credentialsRequired: false
    })

    app.post('/login', function (req, res) {
        const { email, password } = req.body.credentials;
        User.findOne({ email: email }, function (err, user) {
            if (err)
                return res.status(500).send('Error on the server.');
            if (!user)
                return res.status(401).send('No user found.');

            var passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            var token = jwt.sign({ id: user._id }, Config.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ me: user, auth: true, token: token });
        });
    });
    /**
     * Not really needed unless you want to execute any action in the backend after logout
     */
    app.get('/logout', function (req, res) {
        res.status(200).send({ auth: false, token: null });
    });

    /* GRAPHQL */
    app.use('/graphql', auth, GraphHTTP((req) => ({
        schema: Schema,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }

    })));
}