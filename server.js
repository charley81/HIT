import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Server')
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Serve listening on port: ${port}`))
