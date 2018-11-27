let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Log"

//user schema
let schema = new Schema({
  content: { type: String, required: true },
  shipId: { type: ObjectId, ref: 'shipId' },
  userId: { type: ObjectId, ref: 'uid' }
})

let model = mongoose.model(name, schema)

module.exports = model