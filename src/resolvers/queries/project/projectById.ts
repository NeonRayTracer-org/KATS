import { extendType, idArg } from 'nexus'
import { Context } from '../../../db-types'

export const projectById = extendType({
  definition: (t) => {
    t.field('projectById', {
      args: { id: idArg() },
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.project({ id: args.id }),

      type: 'Project'
    })
  },
  type: 'Query'
})
