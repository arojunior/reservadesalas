const {Schema} = require('mongoose')
const moment = require('moment')

const dateNormalize = value => moment(value, 'DD/MM/YYYY HH:mm:ss')

const table = Schema(
  {
    place: String,
    room: String,
    date_start: {
      type: Date,
      set: dateNormalize
    },
    date_end: {
      type: Date,
      set: dateNormalize
    },
    owner: String,
    coffee: Boolean,
    people: Number,
    description: String
  },
  {
    timestamps: true
  }
)

module.exports = table
