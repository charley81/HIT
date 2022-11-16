import Drink from '../models/Drinks.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'
import checkPermissions from '../utils/checkPermission.js'

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
  const { id: drinkId } = req.params

  const drink = await Drink.findOne({ _id: drinkId })

  if (!drink) {
    throw new NotFoundError(`no drink with ID: ${drinkId}`)
  }

  checkPermissions(req.user, drink.createdBy)

  await drink.remove()

  res.status(StatusCodes.OK).json({ msg: 'drink removed' })
}

// @desc get all drinks
// @route GET /api/v1/drinks
// @access private
export async function getAllDrinks(req, res) {
  const drinks = await Drink.find({ createdBy: req.user.userId })

  res
    .status(StatusCodes.OK)
    .json({ drinks, totalDrinks: drinks.length, numOfPages: 1 })
}

// @desc update a drink
// @route PATCH /api/v1/drinks/:id
// @access private
export async function updateDrink(req, res) {
  const { id: drinkId } = req.params

  const {
    drinkLocation,
    drinkName,
    drinkType,
    breweryName,
    thoughts,
    drinkRating
  } = req.body

  if (
    !drinkLocation ||
    !drinkName ||
    !drinkType ||
    !breweryName ||
    !thoughts ||
    !drinkRating
  ) {
    throw new BadRequestError('please provide all values')
  }

  const drink = await Drink.findOne({ _id: drinkId })

  if (!drink) {
    throw new NotFoundError(`No drink with id: ${drinkId}`)
  }

  // check to make sure user is authorized before updating
  checkPermissions(req.user, drink.createdBy)

  const updateDrink = await Drink.findByIdAndUpdate(
    { _id: drinkId },
    req.body,
    {
      new: true,
      // validator check if db is expecting a certain value and you provide something different.. i.e [started, pending, ended] and you provide something different
      runValidators: true
    }
  )

  res.status(StatusCodes.OK).json({ updateDrink })
}

// @desc show user drink stats
// @route GET /api/v1/drinks/stats
// @access private
export async function showInfo(req, res) {
  res.send('show info')
}
