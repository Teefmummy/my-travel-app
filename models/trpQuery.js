const db = require('../config/connection');

//this will render all users that favorited same location
function travelersOneDestination(location) {
  return db.one(`
  SELECT name
  FROM users
  JOIN favorites
  ON users.id = favorites.id
  WHERE favorites.vacations_id = $/favorites.vacations_id/
  `,location)
}

//this should render favorite destination of current user
function allFavDestinationforUser(user_id) {
  return db.any(`
    SELECT *
    FROM favorites
    WHERE favorites.user_id = $/favorites.user_id/
  `, user_id)
}

function creatingFavorites(location) {
  return db.one(`
    INSERT INTO favorites( fave_notes, user_id, vacations_id)
    SET ( $/fave_notes/, $/user_id/, $/vacations_id/)
    RETURNING *
  `, location)
}
//this should render details on selected location
// function deetsforPoi(coord) {
//   return db.any(`
//     SELECT fav_notes
//     FROM favtable
//     where map_coord = $/map_coord/
//   `,coord)
// }

// model below begins the users profile
function creatingUsers(user) {
  return db.one(`
    INSERT INTO users( name, email, hashpassword)
    SET ( $/name/, $/email/, $/hashpassword/)
  `, user)
}
//I will also want to create the hard coded destination to render on REACT
//inside divs the direct the user to that geolocation
 module.exports = {
   travelersOneDestination,
   allFavDestinationforUser,
   // deetsforPoi
   creatingFavorites,
   creatingUsers
 }
