import { GraphQLList, GraphQLString, GraphQLObjectType } from 'graphql/type';

import SerieType from '../types/serie';
import serieController from '../../../../v2/controllers/serie';

const SerieQuery = {
  type: new GraphQLList(SerieType),
  args: {
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