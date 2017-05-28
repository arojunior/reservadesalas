const db = require('../database/mongo')
const {Schema} = require('mongoose')

const reservas = Schema(
  {
    local: String,
    sala: String,
    data_inicio: Date,
    data_fim: Date,
    responsavel: String,
    cafe: Boolean,
    descricao: String
  },
  {
    timestamps: true
  }
)

module.exports = db.model('reservas', reservas)
