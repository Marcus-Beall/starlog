
const mongoose = require('mongoose')
const connectionString = 'mongodb://student1:student1@ds041167.mlab.com:41167/star-logs'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})