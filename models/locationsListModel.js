const db = require('../config/connection');

function getLocationsList() {
  // console.log('models');
    return queryP = db.manyOrNone(`
      SELECT *
      FROM vacations
      ORDER BY location ASC
    `);
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
