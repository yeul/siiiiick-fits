//Takes everything inside of schema.graphql and matches it up with either a mutation or query resolver.

const { GraphQLServer } = require("graphql-yoga");
const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");
const db = require("./db");

//Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: __dirname + "/schema.graphql",
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    //exposes database to every request
    context: req => ({ ...req, db })
  });
}

module.exports = createServer;
