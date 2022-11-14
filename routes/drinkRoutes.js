import express from 'express'
const router = express.Router()
import {
  createDrink,
  deleteDrink,
  showInfo,
  getAllDrinks,
  updateDrink
} from '../controllers/drinkController.js'

router.route('/').post(createDrink).get(getAllDrinks)
router.route('/info').get(showInfo)
router.route('/:id').delete(deleteDrink).patch(updateDrink)

export default router
