const mongoose = require('mongoose')

const reviewPostSchema = new mongoose.Schema({
  reviewPostTitle: {
    type: String,
    required: true
  },
  reviewPostBody: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviewPostComments: [{
    body: String,
    date: Date,
    by: mongoose.Schema.Types.ObjectId
  }],
  affiliateUrl: [{
    url: String
  }],
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('ReviewPost', reviewPostSchema)
