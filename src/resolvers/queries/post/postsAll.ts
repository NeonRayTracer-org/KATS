import { extendType } from 'nexus'
import { Context } from '../../../db-types'

export const postsAll = extendType({
  definition: (t) => {
    t.field('postsAll', {
      list: true,
      nullable: true,
      resolve: async (_, _args, ctx: Context) => ctx.prisma.posts(),

      type: 'Post'
    })
  },
  type: 'Query'
})
