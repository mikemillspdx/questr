/** @format */

const { gql } = require('apollo-server-lambda');
const locationSchema = require("./location");

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [
linkSchema, 
locationSchema
];
