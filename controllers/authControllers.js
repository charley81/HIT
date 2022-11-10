import User from '../models/User.js'

// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ user })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
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
