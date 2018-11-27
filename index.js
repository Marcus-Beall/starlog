let express = require('express')
let bodyParser = require('body-parser')
let server = express()
require("./server-assets/db/mlab-config")

//lines 6 through 7 is middleware. 
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public')) //this makes it so your front-end works. Gives the path on your computer that points to your public folder.
//Don't change the above

//DONT REORDER THIS 
let shipRoutes = require('./server-assets/routes/ships')
let starLogRoutes = require('./server-assets/routes/starLog')
let auth = require('./server-assets/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)

//user can get data when logged in

server.use("*", (req, res, next) => {
  if (!req.session.uid) {
    return next(new Error("Please login to continue"))
  }
  else {
    req.body.creatorId = req.session.uid
    next()
  }
})


server.use('/api/ships', shipRoutes)
server.use('/api/starLog', starLogRoutes)


server.use("*", (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})
//Don't change below
server.listen(3000, () => {
  console.log("The server is running on port:", 3000)
})
