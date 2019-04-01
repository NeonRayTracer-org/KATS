import settings from '@settings'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { extendType, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const userCreate = extendType({
  definition: (t) => {
    t.field('userCreate', {
      args: {
        email: stringArg({ required: true }),
        name: stringArg(),
        password: stringArg({ required: true })
      },
      nullable: true,
      resolve: async (_, args, ctx: Context) => {
        const { email, password, name } = args

        const encryptedPassword = await bcrypt.hash(password, 10)

        const newUser = await ctx.prisma.createUser({
          email,
          name,
          password: encryptedPassword
        })

        return {
          token: jwt.sign({ userId: newUser.id }, settings.common.APP_SECRET, {
            expiresIn: '7d'
          }),
          // tslint:disable-next-line: object-shorthand-properties-first
          user: newUser
        }
      },
      type: 'AuthPayload'
    })
  },
  type: 'Mutation'
})
