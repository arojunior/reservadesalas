const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({
    content: 'no content to show'
  })
})

router.use('/reservation', require('./Reservation'))
router.use('/users', require('./Users'))
router.use('/login', require('./Login'))

module.exports = router
