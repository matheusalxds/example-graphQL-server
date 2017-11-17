import { GraphQLString, GraphQLList } from 'graphql';
import CommentType from '../../comment/types/input/comment-input-create';
import SerieType from '../types/serie';
import SerieController from '../../../../v2/modules/serie/controller/serie';

const fields = {
  name: {
    name: 'name',
    type: GraphQLString,
  },
  status: {
    name: 'status',
    type: GraphQLString,
  },
  comments: {
    name: 'comments',
    type: new GraphQLList(CommentType),
  }
};

const createSerie = {
  type: SerieType,
  args: fields,
  resolve: (obj, fields) => SerieController.create(fields),
};

export default createSerie;