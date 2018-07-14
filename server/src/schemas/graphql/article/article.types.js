import {
    GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInputObjectType, GraphQLNonNull
} from 'graphql';

export const articleFields = {
    id: { type: GraphQLString },
    author: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    excerpt: { type: new GraphQLNonNull(GraphQLString) },
    published: { type: new GraphQLNonNull(GraphQLBoolean) },
    tags: { type: new GraphQLList(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
}
export const ArticleType = new GraphQLObjectType({
    name: 'Article',
    description: 'Article representation',
    fields: () => articleFields,
});



export const ArticleAndArticlesType = new GraphQLObjectType({
    name: 'ArticleAndArticles',
    description: 'Article modified and article list',
    fields: {
        article: { type: ArticleType },
        articles: { type: new GraphQLList(ArticleType) }
    },
});

export const ArticleIdsInputType = new GraphQLInputObjectType({
    name: 'ArticleIdsInput',
    description: 'List of article ids input to delete',
    fields: {
        articleIds: { type: new GraphQLList(GraphQLString) }
    },
});

export const ArticleFilterInputType = new GraphQLInputObjectType({
    name: 'ArticleFilterInput',
    description: 'Article filters',
    fields: {
        author: { type: GraphQLString },
        published: { type: GraphQLBoolean },
        tags: { type: new GraphQLList(GraphQLString) },
    },
});

export const ArticleInputType = new GraphQLInputObjectType({
    name: 'ArticleInput',
    description: 'Article input to create and delete',
    type: ArticleType,
    fields: () => articleFields,
});