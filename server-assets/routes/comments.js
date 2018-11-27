let router = require('express').Router()
let Comments = require('../models/comment')


router.get("/user/:creatorId", (req, res, next) => {
  Comments.find({ creatorId: req.params.creatorId })
    .then(comments => res.send(comments))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(comment => res.send(comment))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  if (req.body.creatorId == req.session.uid) {
    Comments.findByIdAndDelete(req.params.id)
      .then(comment => res.send({ message: "no comment", data: comment }))
      .catch(next)
  }
  else {
    next()
  }

})

router.put('/:id', (req, res, next) => {
  if (req.body.creatorId == req.session.uid) {
    Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(comment => res.send(comment))
      .catch(next)
  }
  else {
    next()
  }
})

module.exports = router