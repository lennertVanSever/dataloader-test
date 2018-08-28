import { ApolloServer } from 'apollo-server';

import { resolvers } from './data/resolvers';
import { typeDefs } from './data/Schema';
import loaders from './data/loaders';
import cors from 'cors';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => loaders,
  engine: {
    apiKey: process.env.API_KEY_APOLLO_ENGINE
  },
  introspection: true,
  playground: true
});

/*
playground: {
  settings: {
    'editor.theme': 'light',
    'editor.cursorShape': 'line'
  },
}*/

const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  ${url}`);
});
