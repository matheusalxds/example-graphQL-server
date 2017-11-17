import { GraphQLString, GraphQLObjectType } from 'graphql';

const fields = {
  comment: {
    type: GraphQLString,
  }
};

export default new GraphQLObjectType({
  name: 'CommentType',
  fields,
});
