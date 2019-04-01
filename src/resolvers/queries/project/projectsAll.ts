import { arg, extendType, intArg, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const projectsAll = extendType({
  definition: (t) => {
    t.field('projects', {
      args: {
        after: stringArg({ required: false }),
        before: stringArg({ required: false }),
        first: intArg({ required: false }),
        last: intArg({ required: false }),
        orderBy: arg({ type: 'ProjectOrderByInput', required: false }),
        skip: intArg({ required: false })
      },
      list: true,
      nullable: true,
      resolve: async (_, _args, ctx: Context) => ctx.prisma.projects(),

      type: 'Project'
    })
  },
  type: 'Query'
})
