const router = require('express').Router()
const model = require('../../models/Users')
const bcrypt = require('bcrypt')

const checkPassword = (pass_user, pass_db) => bcrypt.compare(pass_user, pass_db)

router.post('/', (req, res, next) => {
  model.findOne({email: req.body.email}).then(user => {
    if (!user) {
      return res.json({error: 'User not found'})
    }

    checkPassword(req.body.senha, user.senha)
      .then(response => {
        if (!response) {
          res.json({error: 'Wrong Username or Password'})
        }
        res.json({data: user._id})
      })
      .catch(err => res.json({error: 'Wrong Username or Password'}))
  })
})

module.exports = router
