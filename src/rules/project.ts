import { rule } from 'graphql-shield'

import getUserId from '@util/getUserId'
import { Context } from '../db-types'

export const project = {
  isPostOwner: rule('Is project author')(
    async (_parent, args, ctx: Context) => {
      const userId = getUserId(ctx)

      const author = await ctx.prisma
        .project({
          id: args.id
        })
        .author()

      return Boolean(userId === author.id)
    }
  )
}
