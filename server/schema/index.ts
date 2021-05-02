//importing dependencies
import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import _ from 'lodash';

//graphql types
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

//queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent: any, args: any) {
        //get data from db
      },
    },
  },
});

//schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
