import express from 'express';
import bodyParser from 'body-parser';
import graphqlHttp from 'express-graphql';

const app = express();

app.use(bodyParser.json());

// start db
import './db';

// Graphql
import rootSchema from './src3/graphql/root';
app.use('/v2', graphqlHttp({ schema: rootSchema, graphiql: true }));
console.log('[GRAPHQL SERVER] Running on http://localhost:3000/v2');

app.listen(3000, () => {
  console.log('[SERVER] Running at port 3000');
});