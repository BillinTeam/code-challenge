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

export const ArticleFiltersType = new GraphQLObjectType({
    name: 'ArticleFilters',
    description: 'List of filters available for articles',
    fields: {
        author: { type: new GraphQLList(GraphQLString) },
        tags: { type: new GraphQLList(GraphQLString) }
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
        author: { type: new GraphQLList(GraphQLString) },
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