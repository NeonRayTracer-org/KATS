import { extendType, stringArg } from 'nexus'
import { Context } from '../../../../db-types'

export const projectCategoryBySlug = extendType({
  definition: (t) => {
    t.field('projectCategoryBySlug', {
      args: { slug: stringArg() },
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.projectCategory({ slug: args.slug }),

      type: 'ProjectCategory'
    })
  },
  type: 'Query'
})
