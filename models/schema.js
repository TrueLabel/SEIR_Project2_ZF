const mongoose = require('mongoose');

const homepageSchema = new mongoose.Schema({
  quote: {type: String, required: true},
  who: {type: String},
  when: {type: String},
  where: {type: String},
  factChecked: {type: Boolean}
})

const Homepage = mongoose.model('Homepage', homepageSchema)

module.exports = Homepage;
