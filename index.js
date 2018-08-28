import { ApolloServer, gql } from 'apollo-server';

import { resolvers } from './data/resolvers';
import { typeDefs } from './data/Schema';
import loaders from './data/loaders';



const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    loaders //Check why this is necessary
  },
  engine: {
    apiKey: process.env.API_KEY_APOLLO_ENGINE
  },
  playground: {
    settings: {
      'editor.theme': 'light',
      'editor.cursorShape': 'line'
    },
  }
});

const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  ${url}`);
});
