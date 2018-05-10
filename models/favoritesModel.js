const db = require('../config/connection');

function getAllFavorites() {
    return queryP = db.any(`
      SELECT * FROM favorites
      ` )
}

function addToFavorites(fav) {
  //need to see what type of obj the maps API returns
}


module.exports = {
    getAllFavorites,
    addToFavorites
  }
