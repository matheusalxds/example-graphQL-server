import { GraphQLString, GraphQLNonNull } from 'graphql';
import SerieType from '../types/serie';
import SerieInputType from '../types/input/serie-input-update';
import SerieController from '../../../../v2/modules/serie/controller/serie';

const fields = {
  _id: {
    name: '_id',
    type: new GraphQLNonNull(GraphQLString),
  },
  body: {
    name: 'body',
    type: SerieInputType
  }
}

const SerieMutation = {
  type: SerieType,
  args: fields,
  resolve: (obj, fields) => SerieController.updateSerie(fields),
}

export default SerieMutation;