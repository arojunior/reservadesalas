const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@ds151951.mlab.com:51951/reserva-de-salas')
mongoose.Promise = require('bluebird')

module.exports = mongoose.connection
