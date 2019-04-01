import { extendType, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const projectBySlug = extendType({
  definition: (t) => {
    t.field('projectBySlug', {
      args: { slug: stringArg() },
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.project({ slug: args.slug }),

      type: 'Project'
    })
  },
  type: 'Query'
})
