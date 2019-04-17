import Koa from 'koa';
const { ApolloServer, gql } = require('apollo-server-koa')
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const app = new Koa();
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

module.exports = {
  run: async (port) => {
    await db.connect()
    await app.listen(port)
    console.log(`Server Listening ${port}`)
  },
  app
}