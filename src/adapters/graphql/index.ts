import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

import { userResolvers } from '@/adapters/graphql/user'

type SchemaNames = 'User'

function resolveType(schemaName: SchemaNames) {
  return (obj: any) => (obj.id ? schemaName : 'ErrorType')
}

const typeDefs = `#graphql
  scalar JSON
  scalar JSONObject

  type ErrorType {
    message: String
    payload: JSON
    statusCode: Int
  }

  union UserDataType = User | ErrorType

  type Query { 
    getUser(id: ID!): UserResponse
  }

  type Mutation {
    addUser(input: UserInput!): UserResponse
    deleteUser(id: ID!): UserResponse
    updateUser(id: ID!, email: String, name: String): UserResponse
  }

  input UserInput {
    email: String!
    name: String!
  }

  type User {
    createdAt: String!
    email: String!
    id: ID!
    isActive: Boolean!
    isDeleted: Boolean!
    name: String!
    updatedAt: String!
  }

  type UserResponse {
    data: UserDataType
    success: Boolean
  }
`

const resolvers = {
  Query: {
    ...userResolvers.queries
  },

  Mutation: {
    ...userResolvers.mutations
  },

  User: userResolvers.User,

  UserDataType: {
    __resolveType: resolveType('User')
  },

  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject
}

export { resolvers, typeDefs }
