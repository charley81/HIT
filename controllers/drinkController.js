import Drink from '../models/Drinks.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'

// @desc create a drink
// @route POST /api/v1/drinks
// @access private
export async function createDrink(req, res) {
  const {
    drinkName,
    drinkType,
    drinkLocation,
    breweryName,
    thoughts,
    drinkRating
  } = req.body

  if (
    !drinkName ||
    !drinkType ||
    !drinkLocation ||
    !breweryName ||
    !thoughts ||
    !drinkRating
  ) {
    throw new BadRequestError('please provide all values')
  }

  req.body.createdBy = req.user.userId

  const drink = await Drink.create(req.body)
  res.status(StatusCodes.CREATED).json({ drink })
}

// @desc delete a drink
// @route DELETE /api/v1/drinks/:id
// @access private
export async function deleteDrink(req, res) {
  res.send('delete drink')
}

// @desc get all drinks
// @route GET /api/v1/drinks
// @access private
export async function getAllDrinks(req, res) {
  res.send('get all drinks')
}

// @desc update a drink
// @route PATCH /api/v1/drinks/:id
// @access private
export async function updateDrink(req, res) {
  res.send('update drink')
}

// @desc show user drink stats
// @route GET /api/v1/drinks/stats
// @access private
export async function showInfo(req, res) {
  res.send('show info')
}
