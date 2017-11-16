import { GraphQLObjectType, GraphQLString } from 'graphql/type';

import SerieType from '../types/serie';
import SerieInputType from '../types/input/serie-update-input';
import SerieController from '../../../../v2/controllers/serie';

const SerieMutation = {
  type: SerieType,
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
    body: {
      name: 'body',
      type: SerieInputType,
    },
  },
  resolve: (obj, { _id, body }) => SerieController.updateSerie({ _id, body }),
}

export default SerieMutation;