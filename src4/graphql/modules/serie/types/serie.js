import { GraphQLString, GraphQLObjectType } from 'graphql';

const fields = {
  _id: {
    type: GraphQLString,
    description: 'ID da Serie',
  },
  name: {
    type: GraphQLString,
    description: 'Nome da Serie',
  },
  status: {
    type: GraphQLString,
    description: 'Status da serie'
  },
};

export default new GraphQLObjectType({
  name: 'SerieType',
  fields,
});