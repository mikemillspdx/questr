/** @format */

const { gql } = require('apollo-server-lambda');

module.exports = gql`
  extend type Query {
    locations: [Location]
    location(id: ID!): Location
	locationsByUserId(id: String!): [Location]
	locationsByOrganizationId(id: Int!): [Location]
  }

  extend type Mutation {
    createNewLocation(text: String!): Location!
    deleteLocation(id: ID!): Boolean!
    updateLocation(id: ID!, name: String!): Location!
  }

  type Location {
    id: ID
	  user_id: String
    name: String
    deleted: Int
    organization_id: Int
  }
`;
