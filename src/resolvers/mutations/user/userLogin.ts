import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { extendType, stringArg } from 'nexus'
import { Context } from '../../../db-types'

export const userLogin = extendType({
  definition: (t) => {
    t.field('userLogin', {
      args: { email: stringArg(), password: stringArg() },
      nullable: false,
      resolve: async (_, { email, password }, ctx: Context) => {
        const user = await ctx.prisma.user({ email })

        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
          throw new Error('Invalid password')
        }

        return {
          token: jwt.sign({ userId: user.id }, `${process.env.APP_SECRET}`, {
            expiresIn: '7d'
          }),
          // tslint:disable-next-line: object-shorthand-properties-first
          user
        }
      },
      type: 'AuthPayload'
    })
  },
  type: 'Mutation'
})
