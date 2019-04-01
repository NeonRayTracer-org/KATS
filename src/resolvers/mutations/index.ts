import settings from '@settings'
import { prismaObjectType } from 'nexus-prisma'
import { likePost } from './post/likePost'
import { userCreate } from './user/userCreate'
import { userLogin } from './user/userLogin'

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields([...settings.whitelist.ALLOWED_PRISMA_MUTATIONS])
  }
})

export { likePost, userLogin, userCreate }
