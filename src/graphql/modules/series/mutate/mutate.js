import { GraphQLObjectType, GraphQLString } from 'graphql/type';
import fetch from 'node-fetch';

import SerieType from '../types/serie-type';
import SerieBodyInputType from '../types/serie';
import serieController from '../../../../v1/series/controllers/serie';

const SerieMutate = {
  type: SerieType,
  args:{
    _id: {
      name: '_id',
      type: GraphQLString,
    },
    body: {
      name: 'body',
      type: SerieBodyInputType,
    },
  },
  resolve: (obj, { _id, body }) => serieController.updateSerie({ _id, body })
};

export default SerieMutate;