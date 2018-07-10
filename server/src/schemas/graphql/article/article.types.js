import {
    GraphQLBoolean, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInputObjectType
} from 'graphql';

export const articleFields = {
    id: { type: GraphQLString },
    author: { type: GraphQLString },
    content: { type: GraphQLString },
    excerpt: { type: GraphQLString },
    published: { type: GraphQLBoolean },
    tags: { type: new GraphQLList(GraphQLString) },
    title: { type: GraphQLString },
}
export const ArticleType = new GraphQLObjectType({
    name: 'Article',
    description: 'Article representation',
    fields: () => articleFields,
});

export const ArticleIdsInputType = new GraphQLInputObjectType({
    name: 'ArticleIdsInput',
    description: 'List of article ids input to delete',
    fields: {
        articleIds: { type: new GraphQLList(GraphQLString) }
    },
});

export const ArticleInputType = new GraphQLInputObjectType({
    name: 'ArticleInput',
    description: 'Article input to create and delete',
    type: ArticleType,
    fields: () => articleFields,
});