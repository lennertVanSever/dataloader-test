import { ApolloServer, gql } from 'apollo-server';

import { resolvers } from './data/resolvers';
import { typeDefs } from './data/Schema';
import loaders from './data/loaders';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    loaders
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  ${url}`);
});
