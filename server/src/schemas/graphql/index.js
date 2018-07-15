import _ from 'lodash';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import articleQueries from './article/article.queries';
import articleMutators from './article/article.mutators';

const Query = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Article and User queries',
  fields: _.merge(articleQueries) 
});

const Mutation = new GraphQLObjectType({
  name: 'RootMutators',
  description: 'Article Create, Update and Delete operations',
  fields: _.merge(articleMutators)
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
