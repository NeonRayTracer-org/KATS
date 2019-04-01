/**
 * Returns an error with a provided message
 * @param message A string containing the error message
 * @param context
 */
const AuthError = (message: string, _context?: any) => Error(message)

export default AuthError
