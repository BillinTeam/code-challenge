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

        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) return res.status(500).send('Error on the server.');
            if (!user) return res.status(404).send('No user found.');
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
            var token = jwt.sign({ id: user._id }, SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
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