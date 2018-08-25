import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { data } from './data/Data';



const app = express();
const port = 8000;


app.listen(port, () => console.log(`App running on localhost:${port}`));
app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: data
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
