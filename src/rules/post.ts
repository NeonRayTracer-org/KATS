import { rule } from 'graphql-shield'

import getUserId from '@util/getUserId'
import { Context } from '../db-types'

export const post = {
  isPostOwner: rule('Is post author')(async (_parent, args, ctx: Context) => {
    const userId = getUserId(ctx)

    const author = await ctx.prisma
      .post({
        id: args.id
      })
      .author()

    return Boolean(userId === author.id)
  })
}
