import Article from '../../db/article';
import { createArticleValidator, updateArticleValidator } from '../../../validators/article.validator';
import { cleanNullValues } from '../../../utils';

export function articles(vars, ctx) {

    let filters = vars.filters ? cleanNullValues(vars.filters) : null;
    if (filters && filters.tags) {
        filters.tags = { $in: vars.filters.tags };
    }
    return new Promise((resolve, reject) => {


        Article.find(vars.filters, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}


export function article(vars, ctx) {
    return new Promise((resolve, reject) => {
        Article.findOne({ _id: vars.id }, (err, res) => {
            err ? reject(err) : resolve(res);
        })
    });
}

export function createArticle(vars, ctx) {
    const input = vars.input;

    return new Promise((resolve, reject) => {
        createArticleValidator(input, (err, value) => {
            if (err)
                return reject(err);
            const newArticle = new Article(input);
            /* Return itself with the id */
            newArticle.save((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    });
}

export function updateArticle(vars, ctx) {
    const input = vars.input;
    return new Promise((resolve, reject) => {
        updateArticleValidator(input, (err, value) => {
            if (err)
                return reject(err);
            console.log(input);
            /* Return the whole list */
            Article.where({ _id: input.id }).update(input, (err, res) => {
                if (err)
                    return reject(err);
                Article.find((err, res) => {
                    console.log('returning', res.length, 'articles');
                    err ? reject(err) : resolve({ articles: res, article: input });
                })
            });
        })
    });
}


export function deleteArticles(vars, ctx) {
    let input = vars.input;
    return new Promise((resolve, reject) => {

        Article.where({ _id: { $in: input.articleIds } }).remove((err) => {
            if (err)
                return reject(err)
            /* Returning back articles without deleted one */
            Article.find((err, res) => {
                err ? reject(err) : resolve(res);
            })
        });
    });
}