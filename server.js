import express from 'express'
const app = express()
import notFoundMiddleware from './middleware/notFound.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'

app.get('/', (req, res) => {
  throw new Error('error')
  res.send('Server')
})

// Middleware
// looks for request that do not match any of your routes
app.use(notFoundMiddleware)
// looks for errors happening in our existing route
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Serve listening on port: ${port}`))
