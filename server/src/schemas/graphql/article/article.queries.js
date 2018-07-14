import { GraphQLString, GraphQLList} from 'graphql';
import { ArticleType, ArticleFilterInputType } from './article.types';
import { article, articles } from './article.resolvers';

const articleQueries = {
    articles: {
        type: new GraphQLList(ArticleType),
        args: {
            filters: { type: ArticleFilterInputType }
        },
        resolve(_, vars, ctx) { return articles(vars, ctx) },
    },
    article: {
        type: ArticleType,
        args: {
            id: { type: GraphQLString }
        },
        resolve(_, vars, ctx) { return article(vars, ctx) },
    }
};

export default articleQueries;