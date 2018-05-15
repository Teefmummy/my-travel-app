const db = require('../config/connection');

function getAllFavorites(user_id) {
  console.log(user_id);
    return db.any(`
      SELECT vacations.id AS vacationid, vacations.description, vacations.latitude, vacations.longitude, vacations.location, vacations.img_url, favorites.id AS favoritesid, favorites.fave_notes, favorites.user_id FROM favorites
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

function deleteFavorite(fave) {
  console.log('fave', fave)
  return db.one(`
    DELETE FROM favorites WHERE id = $/id/ AND user_id = $/user_id/
    `, fave)
}

module.exports = {
    getAllFavorites,
    createFavorite,
    deleteFavorite
  }
