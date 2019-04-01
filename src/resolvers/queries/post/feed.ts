import { extendType } from 'nexus'
import { Context } from '../../../db-types'

export const feed = extendType({
  definition: (t) => {
    t.field('postFeed', {
      list: true,
      nullable: true,
      resolve: async (_, _args, ctx: Context) =>
        ctx.prisma.posts({ where: { isPublished: true } }),

      type: 'Post'
    })
  },
  type: 'Query'
})
