const db = require('../config/connection');

function getAllFavorites(user_id) {
  console.log(user_id);
    return db.any(`
      SELECT * FROM favorites
      JOIN vacations
      ON favorites.vacations_id = vacations.id
      WHERE user_id = $1
      `, user_id);
}
function createFavorite(fave) {
  console.log('fave', fave)
  // if (!fave.user_id) fave.user_id = null;
  return db.one(`
    INSERT INTO favorites (fave_notes, vacations_id, user_id)
    VALUES ($/fave_notes/, $/location_id/, $/user_id/)
    RETURNING *
    `, fave);
}

module.exports = {
    getAllFavorites,
    createFavorite
  }
