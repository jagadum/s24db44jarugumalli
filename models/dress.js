const mongoose = require('mongoose');

const dressSchema = new mongoose.Schema({
  type: String,
  size: String,
  price: Number
});
module.exports = mongoose.model('Dress', dressSchema);
