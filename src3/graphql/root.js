import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';

import serieQuery from './modules/series/query/series';
import serieMutation from './modules/series/mutation/serie';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    selectSerie: serieQuery,
    notSerie: serieQuery, // add new 
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateSerie: serieMutation,
    notUpdateSerie: serieMutation,
  },
});

export default new GraphQLSchema({ query: query, mutation: mutation });