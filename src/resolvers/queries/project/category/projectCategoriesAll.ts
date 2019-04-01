import { arg, extendType, intArg, stringArg } from 'nexus'
import { Context } from '../../../../db-types'

export const projectCategoriesAll = extendType({
  definition: (t) => {
    t.field('projectCategoriesAll', {
      args: {
        after: stringArg({ required: false }),
        before: stringArg({ required: false }),
        first: intArg({ required: false }),
        last: intArg({ required: false }),
        orderBy: arg({ type: 'ProjectCategoryOrderByInput', required: false }),
        skip: intArg({ required: false })
      },
      list: true,
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.projectCategories({
          after: args.after ? args.after : undefined,
          before: args.before ? args.before : undefined,
          first: args.first ? args.first : undefined,
          last: args.last ? args.last : undefined,
          orderBy: args.orderBy ? args.orderBy : undefined,
          skip: args.skip ? args.skip : undefined
        }),

      type: 'ProjectCategory'
    })
  },
  type: 'Query'
})
