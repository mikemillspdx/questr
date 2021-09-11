const { ApolloServer, gql } = require('apollo-server-lambda');
const resolvers = require('./resolvers');
const models  = require('./models');
const schema  = require('./schema');


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
    },
});


exports.graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: false,
  },
});