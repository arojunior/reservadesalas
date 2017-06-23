const {Schema} = require('mongoose')
const moment = require('moment')

const dateNormalize = value => moment(value, 'DD/MM/YYYY HH:mm:ss')

const reservas = Schema(
  {
    local: String,
    sala: String,
    data_inicio: {
      type: Date,
      set: dateNormalize
    },
    data_fim: {
      type: Date,
      set: dateNormalize
    },
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
