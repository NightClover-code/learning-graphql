//importing dependencies
import graphql from 'graphql';

//destructuring
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
      resolve(parent, args) {
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
