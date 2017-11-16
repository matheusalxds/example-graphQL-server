import { GraphQLList, GraphQLString } from 'graphql/type';

import SerieType from '../types/serie';
import SerieController from '../../../../v2/modules/controllers/serie';

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
  resolve: (obj, { _id, name }) => SerieController.getAllSeries({ _id, name }),
};

export default SerieQuery;