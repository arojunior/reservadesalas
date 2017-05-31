const router = require('express').Router()
const model = require('../../models/Usuarios')
const bcrypt = require('bcrypt')

const hashPassword = password => bcrypt.hash(password, 10)

const userExists = email => model.findOne({email: email})

router.get('/', (req, res, next) => {
  model.find().then(usuarios => res.json(usuarios))
})

router.post('/', (req, res, next) => {
  userExists(req.body.email).then(user => {
    if (user) {
      return res.json({error: 'This user already exists'})
    }
  })

  hashPassword(req.body.senha)
    .then(hash => Object.assign({}, req.body, {senha: hash}))
    .then(usuario => model.create(usuario))
    .then(response => res.json({data: 'User OK'}))
})

module.exports = router
