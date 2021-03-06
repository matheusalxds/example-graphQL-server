import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql/type';

export const fields = {
  name: {
    type: GraphQLString,
  },
  status: {
    type: GraphQLString
  }
};

export default new GraphQLInputObjectType({
  name: 'SerieInput',
  fields,
});
