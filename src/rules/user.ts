import { rule } from 'graphql-shield'

import getUserId from '@util/getUserId'
import { Context } from '../db-types'

export const user = {
  isUser: rule('Is user')(async (_parent, args, ctx: Context) => {
    const userId = getUserId(ctx)

    const getUser = await ctx.prisma.user({
      id: args.id
    })

    return Boolean(userId === getUser.id)
  })
}
