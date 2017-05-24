import mongoose from 'mongoose'

mongoose.connect('mongodb://root:root@ds151951.mlab.com:51951/reserva-de-salas')
mongoose.Promise = require('bluebird')

export const db = mongoose.connection
