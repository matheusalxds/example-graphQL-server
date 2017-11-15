import { GraphQLList, GraphQLString } from 'graphql/type';
import fetch from 'node-fetch';

import SerieType from '../types/serie-type';
import serieController from '../../../../v1/series/controllers/serie';

const SerieQuery = {
  type: new GraphQLList(SerieType),
  args:{
    _id: {
      name: '_id',
      type: GraphQLString,
    },
    name: {
      name: 'name',
      type: GraphQLString,
    },
  },
  resolve: (obj, { _id, name }) => serieController.getAllSeries({ _id, name })
};

export default SerieQuery;