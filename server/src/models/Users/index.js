const db = require('../../database/mongo')
const table = require('./table')

module.exports = db.model('users', table)
