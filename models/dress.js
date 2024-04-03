const mongoose = require('mongoose');

const dressSchema = mongoose.Schema({
  dress_type: String,
  dress_size: String,
  dress_price: Number
});
module.exports = mongoose.model('dress', dressSchema);