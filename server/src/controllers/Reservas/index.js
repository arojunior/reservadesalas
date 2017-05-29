const router = require('express').Router()
const model = require('../../models/reservas')

router.get('/', (req, res, next) => {
  model.find().then(reservas => res.json(reservas))
})

router.post('/', (req, res, next) => {
  const reserva = req.body
  model.create(reserva).then(response => res.json(response.data))
})

router.put('/', (req, res, next) => {
  const conditions = {
    _id: req.body._id
  }
  delete req.body._id
  model.update(conditions, req.body).then(response => res.json(response.data))
})

module.exports = router
