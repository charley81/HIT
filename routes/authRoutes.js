import express from 'express'
const router = express.Router()
import authUser from '../middleware/authUser.js'
import {
  registerUser,
  loginUser,
  updateUser
} from '../controllers/authControllers.js'

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateUser').patch(authUser, updateUser)

export default router
