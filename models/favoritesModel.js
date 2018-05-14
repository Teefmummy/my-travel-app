const db = require('../config/connection');

function getAllFavorites(user_id) {
  console.log(user_id);
    return db.manyOrNone(`
      SELECT * FROM favorites
      WHERE user_id = $1
      `, user_id);
}


module.exports = {
    getAllFavorites
  }
