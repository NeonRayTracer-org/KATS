import { extendType, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const postBySlug = extendType({
  definition: (t) => {
    t.field('postBySlug', {
      args: { slug: stringArg() },
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.post({ slug: args.slug }),

      type: 'Post'
    })
  },
  type: 'Query'
})
