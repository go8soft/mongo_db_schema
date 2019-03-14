const mongoose = require('mongoose')
const Schema = mongoose.Schema

let machineSchema = new Schema({
  name: { type: String, require: true },
  serialNumber: { type: String, required: true },
  machineType: {
    id: { type: String, require: true },
    name: { type: String, require: true },
    image: { type: String, required: true }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('machine', machineSchema);
