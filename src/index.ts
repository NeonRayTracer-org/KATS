// Make sure global typescript declarations are analyzed:
import 'globals'

import { GraphQLServer } from 'graphql-yoga'

import { prisma } from '@prisma/index'
import settings from '@settings'
import { permissions } from './rules'
import { schema } from './schema'

const {
  common: { PORT },
  whitelist: { ALLOWED_DOMAINS }
} = settings

export const server = new GraphQLServer({
  context: (request: any) => {
    return {
      ...request,
      prisma
    }
  },
  middlewares: [permissions],
  // tslint:disable-next-line: object-shorthand-properties-first
  schema,
  typeDefs: '../generated/schema.graphql'
})

server.express.enable('strict routing')

// Example of custom route
server.express.get('*', (_req, _res, next) => {
  next()
})

import '@util/generateSignature'

server
  .start(
    {
      cors: { origin: ALLOWED_DOMAINS, credentials: true },
      tracing: true
    },
    () =>
      // tslint:disable-next-line: no-console
      console.log(`> API Server is running on http://localhost:${PORT}`)
  )
  .catch((err: Error) => {
    throw err
  })
