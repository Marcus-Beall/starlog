let router = require('express').Router()
let Ships = require('../models/ship')

router.get('/:id', (req, res, next) => {
  Ships.find(req.params.id)
    .then(ship => res.send(ship))
    .catch(next)
})
router.get('/', (req, res, next) => {
  Ships.find({})
    .then(ships => res.send(ships))
    .catch(next)
})
router.post('/', (req, res, next) => {
  Ships.create(req.body)
    .then(ship => res.send(ship))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Ships.findByIdAndDelete(req.params.id)
    .then(ship => res.send({ message: "DELORTED", data: ship }))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  Ships.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(ship => res.send(ship))
    .catch(next)
})

module.exports = router