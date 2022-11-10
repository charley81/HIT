// https://expressjs.com/en/guide/error-handling.html
// rules of express error handler
// accept 4 parameters, first one error
// writing these four parameters, express knows it's going to be an error handler
import { StatusCodes } from 'http-status-codes'

export default function errorHandlerMiddleware(err, req, res, next) {
  console.log(err.message)

  const defaultError = {
    // Check to see if a status code is coming in from custom error class on register authController
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    // check to see if threw a error from front end, if so there will be message property, so use that if not use the generic message
    msg: err.message || 'something went wrong'
  }
  if (err.name === 'ValidationError') {
    // default is status code 500 (internal server error) but we want 400 (bad request)
    defaultError.statusCode = StatusCodes.BAD_REQUEST

    // use Object.values to return an array of the property values of the err.errors obj
    // map over the values and return just the messages and join them together
    defaultError.msg = Object.values(err.errors)
      .map(item => item.message)
      .join(',')
  }

  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    // use Object.keys() to get the keyValue which will show you the field causing the error when getting err.code 11000
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
  }
  // res.status(defaultError.statusCode).json({ msg: err })
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}
