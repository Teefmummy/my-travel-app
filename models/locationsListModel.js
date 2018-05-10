const db = require('../config/connection');

function getLocationsList() {
    return queryP = db.any(`
      SELECT * FROM vacations
      ` )
}

function getOneLocation(id) {
    return queryP = db.one(`
      SELECT * FROM vacations
      WHERE id = $1
      `, id)
}

module.exports = {
    getLocationsList,
    getOneLocation
  }
