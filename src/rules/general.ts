import getUserId from '@util/getUserId'
import requestIsUser from '@util/requestIsUser'
import requestUserIsAdmin from '@util/requestUserIsAdmin'
import { rule } from 'graphql-shield'
import { Context } from '../db-types'

export const general = {
  isAdmin: rule('Is admin')(async (_parent, _args, ctx: Context) => {
    const userId = getUserId(ctx)

    return requestUserIsAdmin(ctx, userId)
  }),

  isAuthenticatedUser: rule('Is authenticated')(
    async (_parent, _args, ctx: Context) => {
      const userId = getUserId(ctx)

      return requestIsUser(ctx, userId)
    }
  )
}
