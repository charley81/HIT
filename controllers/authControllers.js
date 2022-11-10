import User from '../models/User.js'
import 'express-async-errors'

// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  const user = await User.create(req.body)
  res.status(201).json({ user })
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
