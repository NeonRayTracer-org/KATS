import { Prisma, User } from '../generated/prisma-client/index'

export interface Context {
  prisma: Prisma
  request: any
}

// tslint:disable-next-line:interface-name
export interface AuthPayload {
  token: string
  user: User
}

// tslint:disable-next-line:interface-name
export interface LanguageInput {
  country: string
  locale?: string
}

// tslint:disable-next-line:interface-name
export interface Token {
  userId: string
}
