import User from '../models/User.js'
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'

// this class extends from the JS Error method
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    // this gets passed to errorHandlerMiddleware to change the status code from 500 to 400
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  const { email, firstName, password } = req.body

  if (!firstName || !email || !password) {
    throw new CustomAPIError('please provide all values')
  }

  const user = await User.create({ firstName, email, password })
  res.status(StatusCodes.CREATED).json({ user })
}

// @desc login a user
// @route POST /api/v1/auth/login
// @access public
export async function loginUser(req, res) {
  res.send('login user')
}

// @desc update a user
// @route POST /api/v1/auth/updateUser
// @access private
export async function updateUser(req, res) {
  res.send('update user')
}
