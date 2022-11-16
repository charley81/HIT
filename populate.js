// get readFile from file system.... default is callback but I want promises
import { readFile } from 'fs/promises'
import connectDB from './db/connect.js'
import Drink from './models/Drinks.js'
import dotenv from 'dotenv'
dotenv.config()

async function start() {
  try {
    await connectDB(process.env.MONGO_URL)
    await Drink.deleteMany()

    const jsonProducts = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    )

    await Drink.create(jsonProducts)
    console.log('IT WORKED!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
