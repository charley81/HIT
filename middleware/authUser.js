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
    // check the payload userId and see if it's the test user and return true or false
    const testUser = payload.userId === '6377c6f8b164d0b7e7897fa6'
    // ex {userId: '39548g8b82l65p0091a', testUser: true}
    req.user = { userId: payload.userId, testUser }
    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}
