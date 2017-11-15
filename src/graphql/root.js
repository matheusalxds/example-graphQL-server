import { GraphQLObjectType, GraphQLSchema } from 'graphql/type';

import SerieQuery from './modules/series/query/query';
import SerieMutate from './modules/series/mutate/mutate';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    selectSerie: SerieQuery,
  },
});
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateSerie: SerieMutate,
  },
});

export default new GraphQLSchema({ query: query, mutation: mutation })