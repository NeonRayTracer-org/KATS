import { extendType, idArg } from 'nexus'
import { Context } from '../../../db-types'

export const postsByUser = extendType({
  definition: (t) => {
    t.field('postsByUser', {
      args: { id: idArg() },
      list: true,
      nullable: false,
      resolve: async (_, args, ctx: Context) => {
        return ctx.prisma
          .user({ id: args.id })
          .posts({ where: { isPublished: true } })
      },

      type: 'Post'
    })
  },
  type: 'Query'
})
