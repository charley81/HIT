import express from 'express'
const app = express()

// middleware
import notFoundMiddleware from './middleware/notFound.js'

app.get('/', (req, res) => {
  res.send('Server')
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Serve listening on port: ${port}`))
