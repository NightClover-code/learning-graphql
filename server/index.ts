//importing dependencies
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import schema from './schema';

//dotenv & app init
dotenv.config();
const app = express();

//routes
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
);

//listening
const PORT = process.env.PORT;

app.listen(PORT || 4000, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
