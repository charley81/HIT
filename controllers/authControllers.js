import User from '../models/User.js'
import 'express-async-errors'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  const { email, firstName, password } = req.body

  if (!firstName || !email || !password) {
    throw new BadRequestError('please provide all values')
  }

  const userExist = await User.findOne({ email })
  if (userExist) {
    throw new BadRequestError('Email already in use')
  }

  const user = await User.create({ firstName, email, password })
  // custom mongoose method for JWT created on userSchema
  const token = user.createJWT()

  // we added the select: false to the password in the schema so that we don't show the password on the front end but it doesn't work when using .create()... So when returning the user we are hard coding what we want from the user... hard coding and not creating separate function to handle this because in the other controllers since not use .create the select: false will work
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location
    },
    token,
    location: user.location
  })
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
