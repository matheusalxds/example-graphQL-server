import { GraphQLString, GraphQLInputObjectType } from 'graphql';

const fields = {
  name: {
    name: 'name',
    type: GraphQLString,
  },
  status: {
    name: 'status',
    type: GraphQLString,
  }
};

export default new GraphQLInputObjectType({
  name: 'SerieInputType',
  fields,
});
