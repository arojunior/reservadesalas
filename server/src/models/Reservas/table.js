const {Schema} = require('mongoose')

const reservas = Schema(
  {
    local: String,
    sala: String,
    data_inicio: Date,
    data_fim: Date,
    responsavel: String,
    cafe: Boolean,
    quantidade_pessoas: Number,
    descricao: String
  },
  {
    timestamps: true
  }
)

module.exports = reservas
