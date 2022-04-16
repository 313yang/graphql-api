const { createServer } = require("@graphql-yoga/node");

// Provide your schema
const server = createServer({
  schema: {
    typeDefs: `
      type Query {
        ping: String
      }
    `,
    resolvers: {
      Query: {
        ping: () => "pong",
      },
    },
  },
});

// Start the server and explore http://localhost:4000/graphql
server.start();
