import { extendType, idArg } from 'nexus'
import { Context } from '../../../../db-types'

export const projectCategoryById = extendType({
  definition: (t) => {
    t.field('projectCategoryById', {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.projectCategory({ id: args.id }),

      type: 'ProjectCategory'
    })
  },
  type: 'Query'
})
