import { GraphQLInterfaceType, GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql/type';

import CommentType from '../../comments/types/comment';

export const fields = {
  _id: { 
    type: GraphQLString,
    description: 'ID',
  },
  name: { 
    type: GraphQLString,
    description: 'Nome',
  },
  status: { 
    type: GraphQLString,
    description: 'Status',
  },
  comments: {
    type: new GraphQLList(CommentType),
    description: 'Comentários',
  }
}

export default new GraphQLObjectType({
  name: 'SerieType',
  fields,
});
