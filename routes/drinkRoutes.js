import express from 'express'
const router = express.Router()
import {
  createDrink,
  deleteDrink,
  showStats,
  getAllDrinks,
  updateDrink
} from '../controllers/drinkController.js'

router.route('/').post(createDrink).get(getAllDrinks)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteDrink).patch(updateDrink)

export default router
