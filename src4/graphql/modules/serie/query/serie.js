import { GraphQLString, GraphQLObjectType, GraphQLList } from 'graphql';

import SerieType from '../types/serie';
import SerieController from '../../../../v2/modules/serie/controller/serie';

const fields = {
  _id: {
    _id: '_id',
    type: GraphQLString,
  },
  name: {
    name: 'name',
    type: GraphQLString,
  },
}

const SerieQuery = {
  type: new GraphQLList(SerieType),
  args: fields,
  resolve: (obj, fields) => SerieController.getAllSeries(fields),
}

export default SerieQuery;