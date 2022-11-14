import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

export default async function authUser(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('authentication invalid')
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)

    // req.user will be passed to controller when using protected routes
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}
