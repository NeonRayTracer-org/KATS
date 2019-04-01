import { Context } from '../db-types'

const requestUserIsAdmin = async (ctx: Context, userId: string) => {
  const isSiteManager = await ctx.prisma.$exists.user({
    id: userId,
    role: 'SITEMANAGER'
  })

  /* Site manager always get permission */
  if (isSiteManager) {
    return isSiteManager
  }

  const isAdmin = await ctx.prisma.$exists.user({
    id: userId,
    role: 'ADMIN'
  })

  return isAdmin
}

export default requestUserIsAdmin
