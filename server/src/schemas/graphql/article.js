import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} from 'graphql';
import Article from '../db/article';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(_, { id }) {

        if (typeof id != "undefined") {
          return Article.find({ _id: id });
        }

        return Article.find();
      },
    },
  }),
});

const ArticleSchema = new GraphQLSchema({
  query: Query,
});

export default ArticleSchema;
