const mongoose = require('mongoose');

const yarnSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  weight: {type: String, required: true},
  yards: {type: Number, required: true},
  purchaseDate: {type: Date},
  qty: {type: Number}
})

const Yarn = mongoose.model('Yarn', yarnSchema)

module.exports = Yarn;
