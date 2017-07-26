import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql';
import db from './db';

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
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(root, {id}) {
        return db.Article.findOne({ _id: id });
      }
    }
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createArticle: {
      type: articleType,
      args: {
        author: {
          name: 'author',
          type: GraphQLString,
        },
        content: {
          name: 'content',
          type: GraphQLString,
        },
        excerpt: {
          name: 'excerpt',
          type: GraphQLString,
        },
        published: {
          name: 'published',
          type: GraphQLBoolean,
        },
        tags: {
          name: 'tags',
          type: new GraphQLList(GraphQLString),
        },
        title: {
          name: 'title',
          type: GraphQLString,
        },
      },
      resolve(obj, {author, content, excerpt, published, tags, title}) {
        return db.Article.create({ author, content, excerpt, published, tags, title });
      }
    },
    deleteArticle: {
      type: articleType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(obj, {id}) {
        console.log(id);
        return db.Article.findOneAndRemove({ _id: id });
      }
    },
    updateArticle: {
      type: articleType,
      args: {
        author: {
          name: 'author',
          type: GraphQLString,
        },
        content: {
          name: 'content',
          type: GraphQLString,
        },
        excerpt: {
          name: 'excerpt',
          type: GraphQLString,
        },
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString)
        },
        published: {
          name: 'published',
          type: GraphQLBoolean,
        },
        tags: {
          name: 'tags',
          type: new GraphQLList(GraphQLString),
        },
        title: {
          name: 'title',
          type: GraphQLString,
        },
      },
      resolve(obj, {id, author, content, excerpt, published, tags, title}) {
        console.log(id);
        return db.Article.findOneAndUpdate({ _id: id }, { author, content, excerpt, published, tags, title });
      }
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
