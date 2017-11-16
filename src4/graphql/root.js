import { GraphQLSchema, GraphQLObjectType} from 'graphql';
import selectSerie from '../graphql/modules/serie/query/serie';
import updateSerie from '../graphql/modules/serie/mutation/serie';

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
  },
});

export default new GraphQLSchema({ query: query, mutation: mutation });