const db = require('../config/connection');

function getAllFavorites(user_id) {
  console.log(user_id);
    return db.manyOrNone(`
      SELECT * FROM favorites
      WHERE user_id = $1
      `, user_id);
}
function createFavorite(fave) {
  if (!fave.user_id) fave.user_id = null;
  return db.one(`
    INSERT INTO favorites (user_id, location_id, fave_notes)
    VALUES ($/user_id/, $/location_id/, $/fave_notes/)
    RETURNING *
    `, fave);
}

module.exports = {
    getAllFavorites,
    createFavorite
  }
