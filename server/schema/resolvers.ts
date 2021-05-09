//importing utils
import { books, authors } from '../data';
import _ from 'lodash';
//resolvers
export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    book: (_root: any, { id }: any) => _.find(books, { id }),
    author: (_root: any, { id }: any) => _.find(authors, { id }),
  },
  Book: {
    author: (_book: any) => _.find(authors, { id: _book.authorId }),
  },
  Author: {
    books: (_author: any) => _.filter(books, { authorId: _author.id }),
  },
  Mutation: {
    addBook(parent: any, bookParams: any) {
      const newBook = bookParams;
      books.push(newBook);
      return newBook;
    },
  },
};
