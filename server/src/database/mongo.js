const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@192.168.245.3/room-reservation')
mongoose.Promise = require('bluebird')

module.exports = mongoose.connection
