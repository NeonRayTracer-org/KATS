import { Context } from '../db-types'

const requestIsUser = async (ctx: Context, userId: string) => {
  const isUser = await ctx.prisma.$exists.user({
    id: userId
  })

  return isUser
}

export default requestIsUser
