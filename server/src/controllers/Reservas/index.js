const router = require('express').Router()
const model = require('../../models/reservas')

router.get('/', (req, res, next) => {
  model.find().then(reservas => res.json(reservas))
})

router.post('/', (req, res, next) => {
  const reserva = req.body
  model.create(reserva).then(response => res.json(response.data))
})

router.put('/:id', (req, res, next) => {
  const conditions = {
    _id: req.params.id
  }
  delete req.body._id
  model.update(conditions, req.body).then(response => res.json(response.data))
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id

  model
    .findOne({_id: id})
    .then(reserva => model.remove(reserva))
    .then(reservas => model.find())
    .then(reservas => res.json(reservas))
})

module.exports = router
