const router = require('express').Router()
const moment = require('moment')

const model = require('../../models/Reservas')

const dateNormalize = values =>
  Object.assign({}, values, {
    data_inicio: moment(values.data_inicio, 'DD/MM/YYYY HH:mm:ss'),
    data_fim: moment(values.data_fim, 'DD/MM/YYYY HH:mm:ss')
  })

router.get('/', (req, res, next) => {
  model.find().then(reservas => res.json(reservas))
})

router.post('/', (req, res, next) => {
  const reserva = dateNormalize(req.body)
  model.create(reserva)
})

router.put('/:id', (req, res, next) => {
  const conditions = {
    _id: req.params.id
  }
  delete req.body._id
  model.update(conditions, dateNormalize(req.body))
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
