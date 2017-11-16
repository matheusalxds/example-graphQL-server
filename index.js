import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';

const app = express();

app.use(bodyParser.json());

// start db
import './db';

// Graphql
import rootSchema from './src2/graphql/root';
app.use('/v1', graphqlHttp({ schema: rootSchema, graphiql: true }));
console.log('[GRAPHQL SERVER] Running on http://localhost:3000/graphql');

app.listen(3000, () => {
  console.log('[SERVER] Running at port 3000');
});