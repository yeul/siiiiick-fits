//Spins up the GraphQL Yoga server

require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");
const db = require("./db");

//TODO:
//Use express middleware to handle cookies (JWT)
//Use express middleware to populate current user

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => {
    console.log(`Server is now running on port http://localhost:${details.port}`);
  }
);
