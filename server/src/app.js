import Express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import router from './router';

mongoose.connect('mongodb://localhost/billin');
mongoose.set('debug', true);
const app = Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    res.header('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.end();
    }
    next();
});

router(app);

export default app;