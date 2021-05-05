//importing data
import { books } from '../data';

//resolvers
export const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
  Mutation: {
    addBook(parent: any, args: any) {
      const newBook = args;
      books.push(newBook);
      return newBook;
    },
  },
};
