import { buildSchema } from 'graphql';

const types = `
  type Author {
    id: Int
    first_name: String
    last_name: String
    email: String
    birthdate: String
    added: String
    Posts: [Post]
  }
  type Post {
    title: String
    description: String
    content: String
    date: String
  }
`;

const queries = `
  type Query {
    authors: [Author]
  }
`;

module.exports = {
  typeDefs: [types, queries]
}
