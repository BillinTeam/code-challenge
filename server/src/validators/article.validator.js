import Joi from 'joi';

const baseFieldValidations = {
    title: Joi.string().min(3).required().error(new Error("Title must be defined.")),
    content: Joi.string().required().error(new Error("Content must be defined.")),
    excerpt: Joi.string().required().error(new Error("Excerpt must be defined")),
    author: Joi.string().required().error(new Error("Author doesn't exist")),
    tags: Joi.array(),
    published: Joi.boolean().required()
}

const createArticleRules = baseFieldValidations;
const updateArticleRules = {
    // id is a Mongo ID of 12 bytes in hex format (2 characters per byte = 24 chars)
    id: Joi.string().min(24).max(24),
    ...baseFieldValidations
};

export function createArticleValidator (article, callback){
    Joi.validate(article, createArticleRules, callback);
}


export function updateArticleValidator (article, callback){
    Joi.validate(article, updateArticleRules, callback);
}
