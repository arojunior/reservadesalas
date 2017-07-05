const router = require('express').Router()
const model = require('../../models/Reservation')

router.get('/', (req, res, next) => {
  model.find().then(reservations => res.json(reservations))
})

router.post('/', (req, res, next) => {
  const reservation = req.body
  model.create(reservation).then(() => res.json({response: 'OK'}))
})

router.put('/:id', (req, res, next) => {
  const conditions = {
    _id: req.params.id
  }
  delete req.body._id
  model.update(conditions, req.body).then(() => res.json({response: 'OK'}))
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id

  model
    .findOne({_id: id})
    .then(reservation => model.remove(reservation))
    .then(() => model.find())
    .then(reservations => res.json(reservations))
})

module.exports = router
