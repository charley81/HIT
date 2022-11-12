import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './customApi.js'

export default class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}
