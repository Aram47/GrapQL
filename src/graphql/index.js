import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas/userSchema.js';
import resolvers from './resolvers/userResolver.js';

const setupGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return { user: req.user };
    },
  });
  await server.start();
  server.applyMiddleware({ app });
};

export default setupGraphQL;