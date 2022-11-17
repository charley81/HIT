import express from 'express'
const router = express.Router()
import authUser from '../middleware/authUser.js'
import {
  registerUser,
  loginUser,
  updateUser
} from '../controllers/authControllers.js'
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  msg: 'Too many request from this IP address, try again after 15 minutes'
})

router.route('/register').post(limiter, registerUser)
router.route('/login').post(limiter, loginUser)
router.route('/updateUser').patch(authUser, updateUser)

export default router
