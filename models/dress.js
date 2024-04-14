const mongoose = require('mongoose');

const dressSchema = mongoose.Schema({
  dress_type: {
    type: String,
    required: [true, 'Dress type is required'],
    maxlength: [20, 'Dress type must be at most 20 characters long']
  },
  dress_size: String,
  dress_price: {
    type: Number,
    min: [0, 'Dress Price must be a positive number'],
    max: [1000, 'Dress Price cannot exceed $1000'],
    required: [true, 'Price is required']
  }
});

module.exports = mongoose.model('dress', dressSchema);
