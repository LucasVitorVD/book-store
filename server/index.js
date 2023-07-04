import { ApolloServer } from "apollo-server"
import db from "./db/conn.js"
import typeDefs from "./src/schemas/schema.js"
import Query from "./src/resolvers/Query.js"
import Mutation from "./src/resolvers/Mutation.js"
import Books from "./src/models/Book.js"

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context: {
    Books
  }
})

db.sync().then(() => {
  server.listen().then(({url}) => {
    console.log(`Server is running on: ${url}`)
  }).catch(err => console.log(err))
}).catch(err => console.log(err))