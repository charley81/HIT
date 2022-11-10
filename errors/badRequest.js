import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './customApi.js'

// these classes extend the CustomAPIError so that we can pass different status codes to our errorHandlerMiddleware
export default class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    // this gets passed to errorHandlerMiddleware to change the status code from 500 to 400
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}
