// https://expressjs.com/en/guide/error-handling.html
// rules of express error handler
// accept 4 parameters, first one error
// writing these four parameters, express knows it's going to be an error handler
import { StatusCodes } from 'http-status-codes'

export default function errorHandlerMiddleware(err, req, res, next) {
  console.log(err)
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'something went wrong'
  }
  res.status(defaultError.statusCode).json({ msg: err })
}
