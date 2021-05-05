//importing data
import { books } from '../data';

//resolvers
export const resolvers = {
  Query: {
    getAllBooks() {
      return books;
    },
  },
};
