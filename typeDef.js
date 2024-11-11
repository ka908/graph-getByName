const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    name: String
    membercost: Int
  }
  type Query {
    users(name: String): [User]
  }
`;
module.exports = typeDefs;
