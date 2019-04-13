const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'cannot be empty.'],
    unique: true,
    lowercase: true,
    index: true
  },
  email: {
    type: String,
    required: [true, 'cannot be empty.'],
    unique: true,
    lowercase: true,
    index: true
  },
  bio: {
    type: String
  },
  image: {
    type: String
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String,
  role: {
    type: String,
    required: true,
    default: 'User'
  }
},
{
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('User', userSchema)
