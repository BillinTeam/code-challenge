import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInputObjectType
} from 'graphql';
import Article from '../db/article';

const articleFields = {
  author: { type: GraphQLString },
  content: { type: GraphQLString },
  excerpt: { type: GraphQLString },
  
  published: { type: GraphQLBoolean },
  tags: { type: new GraphQLList(GraphQLString) },
  title: { type: GraphQLString },
}

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    ...articleFields,
    id: { type: GraphQLString },
  }),
});
const articleInputType = new GraphQLInputObjectType({
  name: 'ArticleInputType',
  description: 'User payload definition',
  fields: () => (articleFields),
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
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      createArticle: {
        type: articleType,
        args: {
          input: {
            type: new GraphQLNonNull(articleInputType),
          },
        },
        resolve: async (rootValue, { input }) => {
          console.log(input);
          let newArticle = new Article(input);
          return newArticle.save();
        },
      },
    })
  })
});

export default ArticleSchema;
