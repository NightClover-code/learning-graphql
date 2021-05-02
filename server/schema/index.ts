//importing graphql types
import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import { BookType, AuthorType } from './types';
import _ from 'lodash';
//importing dummy data
import { authors, books } from '../data';

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
        return _.find(books, { id: args.id });
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
        return _.find(authors, { id: args.id });
      },
    },
  },
});

//schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
