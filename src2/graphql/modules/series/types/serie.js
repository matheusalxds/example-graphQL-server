import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } from 'graphql/type';

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: () => ({
    comment: { type: GraphQLString},
  }),
});

const SerieType = new GraphQLObjectType ({
  name: 'SerieType',
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    comments : { type: CommentType }
  })
});

export default SerieType;