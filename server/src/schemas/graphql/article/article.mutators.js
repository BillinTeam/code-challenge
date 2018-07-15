import { GraphQLList, GraphQLNonNull } from 'graphql';
import { createArticle, updateArticle, deleteArticles } from './article.resolvers';
import { ArticleType, ArticleInputType, ArticleAndArticlesType, ArticleIdsInputType } from './article.types';

const articleMutators = {
    createArticle: {
        type: ArticleAndArticlesType,
        args: { input: { type: new GraphQLNonNull(ArticleInputType) } },
        resolve: async (_, vars, ctx) => { 
            return createArticle(vars, ctx)
        },
    },
    updateArticle: {
        type: ArticleAndArticlesType,
        args: { input: { type: new GraphQLNonNull(ArticleInputType) } },
        resolve: async (_, vars, ctx) => { return updateArticle(vars, ctx) },
    },
    deleteArticles: {
        type: new GraphQLList(ArticleType),
        args: { input: { type: new GraphQLNonNull(ArticleIdsInputType) } },
        resolve: async (_, vars, ctx) => { return deleteArticles(vars, ctx) },
    }
};

export default articleMutators;