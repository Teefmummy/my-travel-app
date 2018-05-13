const db = require('../config/connection');

function getLocationsList() {
  console.log('models');
    return queryP = db.manyOrNone(`
      SELECT * FROM vacations
<<<<<<< HEAD
=======
      ORDER BY location ASC
>>>>>>> ade10f50a9013c50cd50656b79ca7e9e4c258e74
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
