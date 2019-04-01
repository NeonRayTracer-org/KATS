import { arg, booleanArg, extendType, intArg, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const postsByIsPublished = extendType({
  definition: (t) => {
    t.field('postsByIsPublished', {
      args: {
        after: stringArg({ required: false }),
        before: stringArg({ required: false }),
        first: intArg({ required: false }),
        isPublished: booleanArg(),
        last: intArg({ required: false }),
        orderBy: arg({ type: 'PostOrderByInput', required: false }),
        skip: intArg({ required: false })
      },
      list: true,
      nullable: true,
      resolve: async (_, args, ctx: Context) =>
        ctx.prisma.posts({
          after: args.after ? args.after : undefined,
          before: args.before ? args.before : undefined,
          first: args.first ? args.first : undefined,
          last: args.last ? args.last : undefined,
          orderBy: args.orderBy ? args.orderBy : undefined,
          skip: args.skip ? args.skip : undefined,
          where: { isPublished: args.isPublished }
        }),

      type: 'Post'
    })
  },
  type: 'Query'
})
