import { GraphQLObjectType, GraphQLString } from 'graphql/type';

import SerieType from '../types/serie-type';
import SerieBodyInputType from '../types/serie';
import SerieController from '../../../../v1/series/controllers/serie';

const SerieMutate = {
  type: SerieType,
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
    body: {
      name: 'body',
      type: SerieBodyInputType,
    },
  },
  resolve: (obj, { _id, body }) => SerieController.updateSerie({ _id, body })
};

export default SerieMutate;