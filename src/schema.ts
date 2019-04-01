import datamodelInfo from '@nexus-prisma/index'
import { prisma } from '@prisma/index'
import { makePrismaSchema } from 'nexus-prisma'
import * as path from 'path'
import { resolvers } from './resolvers'

export const schema = makePrismaSchema({
  nonNullDefaults: {
    input: true,
    output: true
  },

  outputs: {
    schema: path.join(__dirname, '../generated/schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts')
  },

  prettierConfig: {
    arrowParens: 'always',
    bracketSpacing: true,
    jsxBracketSameLine: true,
    printWidth: 80,
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none'
  },

  prisma: {
    datamodelInfo,
    // tslint:disable-next-line: object-literal-sort-keys
    client: prisma
  },

  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',

  typegenAutoConfig: {
    contextType: 'types.Context',
    sources: [
      {
        alias: 'types',
        source: path.join(__dirname, 'db-types.ts')
      }
    ]
  },
  types: [resolvers.mutations, resolvers.queries, resolvers.AuthPayload]
})
