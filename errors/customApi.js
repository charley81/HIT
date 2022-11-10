// this class extends from the JS Error method
export default class CustomAPIError extends Error {
  // pass in the message and send to errorHandlerMiddleware
  constructor(message) {
    super(message)
  }
}
