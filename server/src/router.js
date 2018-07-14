import GraphHTTP from 'express-graphql';
import Schema from './schemas/graphql';
import jwt from 'jsonwebtoken';
import ejwt from 'express-jwt/lib';
import bcrypt from 'bcrypt';

import User from './schemas/db/user';
import Config from "./config";
import { authLoginValidator } from './validators/auth.validator';

export default function router(app) {
    /* AUTH */
    const auth = ejwt({
        secret: Config.SECRET,
        credentialsRequired: false
    })

    app.post('/login', function (req, res) {

        authLoginValidator(req.body.credentials, (errors, value) => {
            const { email, password } = req.body.credentials;

            if (errors) {
                return res.status(200).json({ errors: [{ message: errors.message }] });
            }
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
                res.status(200).send({ data: { me: user, auth: true, token: token } });
            });
        });

    }).cat;
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