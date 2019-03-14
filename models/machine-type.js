const mongoose = require('mongoose')
const Schema = mongoose.Schema

let machineTypeSchema = new Schema({
  name: { type: String, require: true },
  image: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('machinetype', machineTypeSchema);
