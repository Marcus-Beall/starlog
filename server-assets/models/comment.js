let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let name = "Comment"

//user schema
let schema = new Schema({
  content: { type: String, required: true },
  logId: { type: ObjectId, ref: 'logId' },
  userId: { type: ObjectId, ref: 'uid' }
})

let model = mongoose.model(name, schema)

module.exports = model