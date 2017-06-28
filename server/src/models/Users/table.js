const {Schema} = require('mongoose')

const users = Schema(
  {
    nome: String,
    email: String,
    senha: String
  },
  {
    timestamps: true
  }
)

module.exports = users
