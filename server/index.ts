//importing dependencies
import express from 'express';
import dotenv from 'dotenv';
//importing graphql utils
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';

//dotenv & app init
dotenv.config();
const app = express();

//init apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//middlewares
server.applyMiddleware({ app });

//listening
const PORT = process.env.PORT;

app.listen(PORT || 4000, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
