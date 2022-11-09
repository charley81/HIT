import mongoose from 'mongoose'
const { Schema } = mongoose

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
    unique: true
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
})

export default mongoose.model('User', userSchema)
