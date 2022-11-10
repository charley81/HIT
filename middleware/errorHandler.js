// https://expressjs.com/en/guide/error-handling.html
// rules of express error handler
// accept 4 parameters, first one error
// writing these four parameters, express knows it's going to be an error handler
export default function errorHandlerMiddleware(err, req, res, next) {
  console.log(err)
  res.status(500).json({ msg: err })
}
