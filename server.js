import express from 'express'
const app = express()
import connectDB from './db/connect.js'
import notFoundMiddleware from './middleware/notFound.js'
import errorHandlerMiddleware from './middleware/errorHandler.js'
import authRouter from './routes/authRoutes.js'
import drinksRouter from './routes/drinkRoutes.js'
import dotenv from 'dotenv'
dotenv.config()

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.json())

// routes setup
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/drinks', drinksRouter)

// Middleware
// looks for request that do not match any of your routes
app.use(notFoundMiddleware)
// looks for errors happening in our existing route and sends to this error handling function
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

// only spin up server if database connection was successful
// has to be async because connectDB/mongoose connect returns a promise
async function start() {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Server listening on port: ${port}`))
  } catch (err) {
    console.log(err)
  }
}
start()
