const mongoose = require('mongoose');

const dressSchema = mongoose.Schema({
  dress_type: {
    type: String,
    minlength:[4],
    maxlength: [20]
  },
  dress_size: String,
  dress_price: {
    type: Number,
    min: [0],
    max: [1000],
  }
});

module.exports = mongoose.model('dress', dressSchema);
