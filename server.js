import express from 'express'
const app = express()
import connectDB from './db/connect.js'
import notFoundMiddleware from './middleware/notFound.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import dotenv from 'dotenv'
dotenv.config()

app.get('/', (req, res) => {
  res.send('Server')
})

// Middleware
// looks for request that do not match any of your routes
app.use(notFoundMiddleware)
// looks for errors happening in our existing route
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

// only spin up server if database connection was successful
// has to be async because connectDB/mongoose connect returns a promise
async function start() {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Serve listening on port: ${port}`))
  } catch (err) {
    console.log(err)
  }
}
start()
