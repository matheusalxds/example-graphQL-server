import { GraphQLInputObjectType, GraphQLString } from 'graphql/type';

const fields = {
  name: {
    type: GraphQLString 
  },
  status: {
    type: GraphQLString
  }
};

export default new GraphQLInputObjectType({
  name: 'SerieInputType',
  fields
});
