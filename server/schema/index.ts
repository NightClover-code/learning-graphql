//importing graphql types
import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import { BookType, AuthorType } from './types';
import _ from 'lodash';

//queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent: any, args: any) {
        //get data from db
      },
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID,
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
