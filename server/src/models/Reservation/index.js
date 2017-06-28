const db = require('../../database/mongo')
const table = require('./table')

const model = db.model('reservation', table)
/*
table.pre('create', true, (next, done) => {
  model
    .find()
    .where({
      place: this.place,
      room: this.room
    })
    .where('date_start')
    .gte(this.date_start)
    .where('date_start')
    .lte(this.date_start)
    .then(reservation => {
      if (reservation.length >= 1) {
        next(new Error('This room is not disponible at this time'))
      }
    })
})
*/
module.exports = model
