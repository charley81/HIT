import mongoose from 'mongoose'
const { Schema } = mongoose
import validator from 'validator'

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'please provide a name'],
    minLength: 3,
    maxLength: 20,
    trim: true
  },
  firstName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'last name'
  },
  email: {
    type: String,
    required: [true, 'please provide an email'],
    unique: true,
    validate: {
      // using a npm package to validate email because it's better tested and gives you more options
      validator: validator.isEmail,
      message: 'please provide a valid email'
    }
  },
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minLength: 6
  },
  location: {
    type: String,
    maxLength: 20,
    trim: true,
    default: 'your city'
  }
  // https://mongoosejs.com/docs/validation.html#custom-validators
})

export default mongoose.model('User', userSchema)
