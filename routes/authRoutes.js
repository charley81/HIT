import { Router } from 'express'
const router = Router()
import {
  registerUser,
  loginUser,
  updateUser
} from '../controllers/authControllers.js'

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateUser').patch(updateUser)

export default router
