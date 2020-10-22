const { PrismaClient } = require("@prisma/client")
const { GraphQLServer, PubSub } = require('graphql-yoga');
const pubsub = new PubSub()

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
// const Subscription = require('./resolvers/Subscription');

const User = require('./resolvers/User');

const resolvers = {
  Query,
  Mutation,
  // Subscription,
  User,
}

const prisma = new PrismaClient()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
