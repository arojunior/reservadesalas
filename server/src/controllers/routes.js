const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({
    content: 'no content to show'
  })
})

router.use('/reservas', require('./Reservas'))
router.use('/usuarios', require('./Usuarios'))
router.use('/login', require('./Login'))

module.exports = router
