import User from '../models/User.js'
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'

// this class extends from the JS Error method
class CustomAPIError extends Error {
  // pass in the message and send to errorHandlerMiddleware
  constructor(message) {
    super(message)
  }
}

// these classes extend the CustomAPIError so that we can pass different status codes to our errorHandlerMiddleware
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    // this gets passed to errorHandlerMiddleware to change the status code from 500 to 400
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message)
    // this gets passed to errorHandlerMiddleware to change the status code from 500 to 400
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  const { email, firstName, password } = req.body

  if (!firstName || !email || !password) {
    throw new BadRequestError('please provide all values')
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
