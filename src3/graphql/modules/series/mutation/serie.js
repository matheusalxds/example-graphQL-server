import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql/type';

import SerieType from '../types/serie';
import SerieInput from '../types/input/serie-input';
import SerieController from '../../../../v2/modules/controllers/serie'

const mutation = {
  type: SerieType,
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString)
    },
    body: {
      name: 'body',
      type: new GraphQLNonNull(SerieInput),
    },
  },
  resolve: (obj, {_id, body}) => SerieController.updateSerie({ _id, body }),
}

export default mutation;