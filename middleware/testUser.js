import { BadRequestError } from '../errors/index.js'

const testUser = (req, res, next) => {
  // if testUser is true, throw error... user is test only and has read only access
  if (req.user.testUser) {
    throw new BadRequestError('Test user.. Read only access')
  }
  next()
}

export default testUser
