import { Query, resolversTypes } from './Resolver';
import { typeDefs } from './Schema';
import { makeExecutableSchema } from 'graphql-tools';

const resolvers = {
  Query,
  ...resolversTypes
}

const data = makeExecutableSchema({
  typeDefs,
  resolvers
});

export { data };
