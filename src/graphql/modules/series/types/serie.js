import {
  GraphQLInputObjectType,
  GraphQLString,
} from 'graphql/type';

// import UserVehicleInputType from '../../../user/types/inputs/user-vehicle';

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
