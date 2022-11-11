import mongoose from 'mongoose'
const { Schema } = mongoose
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'please provide a name'],
    minLength: 3,
    maxLength: 20,
    trim: true
  },
  lastName: {
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

// hash the password.. run this before saving in DB
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  // this sets the password value to a hashed password
  this.password = await bcrypt.hash(this.password, salt)
})

// Custom method added to userSchema... use this on the created user in frontend to create a jwt
userSchema.methods.createJWT = function () {
  // jtw.sign looks for three things (payload, secret, options)
  return jwt.sign({ userId: this._id }, 'jwtSecret', { expiresIn: '1d' })
}

export default mongoose.model('User', userSchema)
