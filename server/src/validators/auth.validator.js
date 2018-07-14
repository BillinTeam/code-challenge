import Joi from 'joi';

const authLoginRules = {
    email: Joi.string().email().error(new Error("You have to indicate your email.")),
    password: Joi.string().required().min(1).error(new Error("You have to indicate your password.")),
};


export function authLoginValidator (credentials, callback){
    Joi.validate(credentials, authLoginRules, callback);
}
