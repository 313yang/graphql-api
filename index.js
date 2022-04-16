import { createServer } from "@graphql-yoga/node";
import { person } from "./graphql/schema";
// Provide your schema
const server = createServer({
  schema: person,
});

// Start the server and explore http://localhost:4000/graphql
server.start();
