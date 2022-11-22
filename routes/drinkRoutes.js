import express from 'express'
const router = express.Router()
import testUser from '../middleware/testUser.js'
import {
  createDrink,
  deleteDrink,
  showInfo,
  getAllDrinks,
  updateDrink
} from '../controllers/drinkController.js'

router.route('/').post(testUser, createDrink).get(getAllDrinks)
router.route('/info').get(showInfo)
router.route('/:id').delete(testUser, deleteDrink).patch(testUser, updateDrink)

export default router
