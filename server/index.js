//importing dependencies
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

//initializing app
const app = express();

//routes
app.use('/graphql', graphqlHTTP({}));

//listening
const PORT = process.env.PORT;

app.listen(PORT || 4000, () =>
  console.log(`listening on port ${PORT}, visit http://localhost:${PORT}`)
);
