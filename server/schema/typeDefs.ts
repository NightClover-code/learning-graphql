//importing gql
import { gql } from 'apollo-server-express';

//type defs
export const typeDefs = gql`
  # query
  type Query {
    books: [Book]
    authors: [Author]
    book(id: ID!): Book
    author(id: ID!): Author
  }

  # types
  type Book {
    id: ID!
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  # Mutations
  type Mutation {
    addBook(input: AddBook): Book!
    addAuthor(input: AddAuthor): Author!
  }

  # inputs
  input AddBook {
    id: ID!
    name: String!
    genre: String!
  }

  input AddAuthor {
    id: ID!
    name: String!
    age: Int!
  }
`;
