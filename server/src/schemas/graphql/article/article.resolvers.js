import Article from '../../db/article';

export function articles(vars, ctx) {
    return new Promise((resolve, reject) => {
        Article.find(null, (err, res) => {
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
    let input = vars.input;
    let newArticle = new Article(input);
    return new Promise((resolve, reject) => {
        /* Return itself with the id */
        newArticle.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
}

export function updateArticle(vars, ctx) {
    let input = vars.input;
    return new Promise((resolve, reject) => {
        /* Return the whole list */
        Article.where({ _id: input.id }).update(input, (err, res) => {
            if (err)
                return reject(err);
            Article.find((err, res) => {
                err ? reject(err) : resolve(res);
            })
        });
    });
}


export function deleteArticles(vars, ctx) {
    let input = vars.input;
    return new Promise((resolve, reject) => {
        //Article.deleteOne({ _id: input.id }, (err) => {
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