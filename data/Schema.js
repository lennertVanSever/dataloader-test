import { buildSchema } from 'graphql';
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  union SearchResult = Author | Post

  type Author {
    id: Int
    first_name: String
    last_name: String
    email: String
    birthdate: String
    added: String
    length(unit: LengthUnit = METER): Float
    """Example of a description"""
    Posts: [Post!]!
  }

  type Post {
    title: String
    description: String
    content: String
    date: String
  }

  enum LengthUnit {
    INCH
    FOOT
    METER
  }

  type Query {
    authors: [Author]
    search(query: String): [SearchResult]
  }
`;

module.exports = {
  typeDefs
}
