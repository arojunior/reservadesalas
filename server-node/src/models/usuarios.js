const db = require('../database/mongo')
const {Schema} = require('mongoose')

const usuarios = Schema(
  {
    nome: String,
    email: String,
    senha: String
  },
  {
    timestamps: true
  }
)

module.exports = db.model('usuarios', usuarios)
