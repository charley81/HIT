import Drink from '../models/Drinks.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'
import checkPermissions from '../utils/checkPermission.js'
import mongoose from 'mongoose'
import moment from 'moment'

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
  console.log(req.user)
  const { search, sort } = req.query
  // const drinks = await Drink.find({ createdBy: req.user.userId })

  // search/sort properties will be conditionally added to this obj
  const queryObject = {
    createdBy: req.user.userId
  }

  // pass in values to the regex, search term and option i for case sensitive
  if (search) {
    queryObject.drinkType = { $regex: search, $options: 'i' }
  }

  // not using await here so that we can chain some more stuff to the queryObject. if you go with await you get the result right away. if you don't use await you get back the query so you can chain
  let result = Drink.find(queryObject)

  // sort options chained to queryObj
  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('drinkName')
  }
  if (sort === 'z-a') {
    result = result.sort('-drinkName')
  }

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit

  result = result.skip(skip).limit(limit)

  const drinks = await result

  // get the total number of docs for a certain user
  const totalDrinks = await Drink.countDocuments(queryObject)
  // take the total docs and divide by limit to get num of pages and round up so we don't have a half page
  const numOfPages = Math.ceil(totalDrinks / limit)

  res.status(StatusCodes.OK).json({ drinks, totalDrinks, numOfPages })
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
  // mongoDB aggregation pipeline
  // https://www.mongodb.com/basics/aggregation-pipeline
  // series of steps to get data from mongo
  let monthlyDrinks = await Drink.aggregate([
    // getting userId from authUser middleware
    // get all drinks by certain user
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    // group the matched drinks by year and month
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 }
      }
    },
    // originally results where all mixed together. $sort will sort them in our case latest first
    // _id.year, _id.month coming from group id obj
    {
      $sort: { '_id.year': -1, '_id.month': -1 }
    },
    // limit to last six months
    {
      $limit: 6
    }
  ])

  monthlyDrinks = monthlyDrinks
    .map(drink => {
      const {
        _id: { year, month },
        count
      } = drink

      const date = moment()
        .month(month - 1) // accepts 0 - 11
        .year(year)
        .format('MMM Y')

      return { date, count }
    })
    .reverse() // so that oldest month will show first in chart

  res.status(StatusCodes.OK).json({ monthlyDrinks })
}
