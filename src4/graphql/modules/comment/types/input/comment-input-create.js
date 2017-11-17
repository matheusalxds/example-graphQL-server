import { GraphQLString, GraphQLInputObjectType, GraphQLList } from 'graphql';

const fields = {
  comment: {
    name: 'comment',
    type: GraphQLString,
  }
};

export default new GraphQLInputObjectType({
  name: 'CommentInputType',
  fields,
});
