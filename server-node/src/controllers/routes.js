const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({
    content: 'no content to show'
  })
})

router.use('/reservas', require('./reservas'))

module.exports = router
