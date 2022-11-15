import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const DrinksSchema = new Schema(
  {
    drinkName: {
      type: String,
      required: [true, 'please provide a drink name'],
      maxLength: 15
    },
    drinkType: {
      type: String,
      required: [true, 'please provide a drink type'],
      maxLength: 15,
      default: 'pilsner'
    },
    drinkLocation: {
      type: String,
      required: [true, 'please provide a location'],
      default: 'my city'
    },
    breweryName: {
      type: String,
      required: [true, 'please provide a brewery name'],
      default: 'brewery name'
    },
    thoughts: {
      type: String,
      required: [true, 'please provide your thoughts about this drink'],
      default: 'I love this beer'
    },
    drinkRating: {
      type: Number,
      required: [true, 'please provide a rating'],
      min: 1,
      max: 10,
      default: 10
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'please provide a user']
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Drink', DrinksSchema)
