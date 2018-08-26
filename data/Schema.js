import { buildSchema } from 'graphql';
import { gql } from 'apollo-server-express';

const typeDefs = gql`
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

  type Query {
    authors: [Author]
  }
`;

module.exports = {
  typeDefs
}
