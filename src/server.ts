import 'module-alias/register'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { resolvers, typeDefs } from './adapters/graphql'
import { constants } from '@/config'

const { NODE_ENV, PORT } = constants

export { createServer }

async function createServer() {
  const server = new ApolloServer({ typeDefs, resolvers })

  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT }
  })

  // eslint-disable-next-line no-console
  if (NODE_ENV != 'test') console.log('API listening at:', url)

  return { server, url }
}
