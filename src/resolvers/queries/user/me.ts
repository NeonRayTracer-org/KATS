import getUserId from '@util/getUserId'
import { extendType } from 'nexus'
import { Context } from '../../../db-types'

export const me = extendType({
  definition: (t) => {
    t.field('me', {
      nullable: true,
      resolve: async (_, args, ctx: Context) => {
        const id = getUserId(ctx)
        if (id) ctx.prisma.user({ id: args.id })

        return null
      },

      type: 'User'
    })
  },
  type: 'Query'
})
