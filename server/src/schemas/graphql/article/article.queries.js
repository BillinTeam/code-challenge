import { GraphQLString, GraphQLList} from 'graphql';
import { ArticleType, ArticleFilterInputType, ArticleFiltersType } from './article.types';
import { article, articles, filters } from './article.resolvers';

const articleQueries = {
    articles: {
        type: new GraphQLList(ArticleType),
        args: {
            filters: { type: ArticleFilterInputType }
        },
        resolve(_, vars, ctx) { return articles(vars, ctx) },
    },
    filters: {
        type: ArticleFiltersType,
        resolve(_, vars, ctx) { return filters(vars, ctx) },
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