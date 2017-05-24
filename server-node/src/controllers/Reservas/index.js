const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({hello: 'World'})
})

module.exports = router
