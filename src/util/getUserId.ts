import { verify } from 'jsonwebtoken'

import { Context, Token } from '../db-types'

import AuthError from './authError'

function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, `${process.env.APP_SECRET}`) as Token

    return verifiedToken && verifiedToken.userId
  }

  AuthError('Unauthorized request!')

  return ''
}

export default getUserId
