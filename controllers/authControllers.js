// @desc register a user
// @route POST /api/v1/auth/register
// @access public
export async function registerUser(req, res) {
  res.send('register user')
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
