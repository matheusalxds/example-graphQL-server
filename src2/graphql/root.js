import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';
import serieQuery from './modules/series/query/query';
import serieMutation from './modules/series/mutate/mutate';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    selectSerie: serieQuery,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateSerie: serieMutation,
  },
});

// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     updateSerie
//   }
// });

export default new GraphQLSchema({ query: query, mutation: mutation });