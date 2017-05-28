const router = require('express').Router()
const model = require('../../models/reservas')

router.get('/', (req, res, next) => {
  model.find().then(reservas => res.json(reservas))
})

module.exports = router
