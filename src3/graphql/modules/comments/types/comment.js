import { GraphQLInterfaceType, GraphQLString, GraphQLObjectType } from 'graphql/type';

export const fields = {
  comment: { 
    type: GraphQLString,
    description: 'Comentário',
  },
}

export default new GraphQLObjectType({
  name: 'CommentType',
  fields,
});
