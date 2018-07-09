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
  id: { type: GraphQLString },
  author: { type: GraphQLString },
  content: { type: GraphQLString },
  excerpt: { type: GraphQLString },

  published: { type: GraphQLBoolean },
  tags: { type: new GraphQLList(GraphQLString) },
  title: { type: GraphQLString },
}

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => articleFields,
});

const ArticleIdsType = new GraphQLInputObjectType({
  name: 'ArticleIdsInput',
  description: 'This represents a list of IDs',
  fields: {
    articleIds: { type: new GraphQLList(GraphQLString) }
  },
});




const ArticleInputType = new GraphQLInputObjectType({
  name: 'ArticleInput',
  description: 'User payload definition',
  type: ArticleType,
  fields: () => articleFields,
});


const Query = new GraphQLObjectType({
  name: 'ArticleQuery',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(ArticleType),
      resolve() { return Article.find(); },
    },
    article: {
      type: ArticleType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(_, { id }) { return Article.findOne({ _id: id }) },
    },
  }),
});



const Mutation = new GraphQLObjectType({
  name: 'ArticleMutation',
  fields: () => ({
    createArticle: {
      type: ArticleType,
      args: {
        input: { type: new GraphQLNonNull(ArticleInputType), },
      },
      resolve: async (rootValue, { input }) => {
        let newArticle = new Article(input);
        return new Promise((resolve, reject) => {
          /* Return itself with the id */
          newArticle.save((err, res) => {
            err ? reject(err) : resolve(res);
          });
        });

      },
    },
    updateArticle: {
      type: ArticleType,
      args: {
        input: { type: new GraphQLNonNull(ArticleInputType), },
      },
      resolve: async (rootValue, { input }) => {
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
      },
    },
    deleteArticles: {
      type: new GraphQLList(ArticleType),
      args: {
        input: { type: new GraphQLNonNull(ArticleIdsType), },
      },
      resolve: async (rootValue, { input }) => {
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
      },
    },


  })
})
const ArticleSchema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default ArticleSchema;
