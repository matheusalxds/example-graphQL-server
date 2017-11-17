import { GraphQLSchema, GraphQLObjectType} from 'graphql';
import selectSerie from '../graphql/modules/serie/query/serie';
import updateSerie from '../graphql/modules/serie/mutation/serie';
import createSerie from '../graphql/modules/serie/mutation/create';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    selectSerie: selectSerie,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    updateSerie: updateSerie,
    createSerie: createSerie,
  },
});

export default new GraphQLSchema({ query: query, mutation: mutation });