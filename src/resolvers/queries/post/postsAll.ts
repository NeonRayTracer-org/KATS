import { extendType } from 'nexus'
import { Context } from '../../../db-types'

export const postsAll = extendType({
  definition: (t) => {
    t.field('postsAll', {
      nullable: true,
      list: true,
      resolve: async (_, _args, ctx: Context) => ctx.prisma.posts(),

      type: 'Post'
    })
  },
  type: 'Query'
})
