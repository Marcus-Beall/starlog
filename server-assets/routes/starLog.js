let router = require('express').Router()
let Logs = require('../models/log')


//USE FOR FINDING ALL REVIEWS WRITTEN BY A USER BY USERID
router.get("/user/:creatorId", (req, res, next) => {
  Logs.find({ creatorId: req.params.creatorId })
    .then(logs => res.send(logs))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Logs.create(req.body)
    .then(log => res.send(log))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Logs.findByIdAndDelete(req.params.id)
    .then(log => res.send({ message: "DELORTED", data: log }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Logs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(log => res.send(log))
    .catch(next)
})

module.exports = router