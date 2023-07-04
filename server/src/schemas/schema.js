import { gql } from "apollo-server"

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    about: String!
    image: String!
    price: Float!
    category: String!
    language: String!
    isBestSeller: Boolean!
  }

  type Query {
    books(filter: BookFiltersInput): [Book]!
    book(id: ID!): Book!
  }

  type Mutation {
    createBook(input: CreateNewBookInput!): Book!
    deleteBook(id: ID!): String!
    updateBook(id: ID!, input: UpdateBookInput!): Book!  
  }

  input CreateNewBookInput {
    title: String!
    author: String!
    about: String!
    image: String!
    price: Float!
    category: String!
    language: String!
    isBestSeller: Boolean!
  }

  input UpdateBookInput {
    title: String!
    author: String!
    about: String!
    image: String!
    price: Float!
    category: String!
    language: String!
    isBestSeller: Boolean!
  }

  input BookFiltersInput {
    isBestSeller: Boolean
    category: String
  }
`

export default typeDefs