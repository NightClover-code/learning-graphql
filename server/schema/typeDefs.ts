//importing gql
import { gql } from 'apollo-server-express';

//type defs
export const typeDefs = gql`
  # types
  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book!]!
  }
  # queries
  type Query {
    getAllBooks: [Book!]!
  }
  # Mutations
`;
