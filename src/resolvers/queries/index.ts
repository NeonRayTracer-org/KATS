import settings from '@settings'
import { prismaObjectType } from 'nexus-prisma'

export * from './post'
export * from './project'
export * from './user'

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(settings.whitelist.ALLOWED_PRISMA_QUERIES)
  }
})
