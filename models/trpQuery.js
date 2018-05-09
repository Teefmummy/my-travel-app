const db = require('../config/connection');

//this will render all users that favorited same location
function travelersOneDestination() {
  return db.any('
  SELECT username
  FROM users JOIN favtable
  WHERE favtable.traveler = favtable.vacation
  ')
}

//this should render favorite destination of current user
function allFavDestinationforUser() {
  return db.any(`
    SELECT location
    FROM vacaytable
    WHERE users.user_id = $1
  `)
}

//this should render details on selected location
function deetsforPoi(coord) {
  return db.any(`
    SELECT fav_notes
    FROM favtable
    where map_coord = $/map_coord/
  `,coord)
}

//I will also want to create the hard coded destination to render on REACT
//inside divs the direct the user to that geolocation
 module.exports = {
   travelerOneDestination,
   allFavDestinationforUser,
   deetsforPoi
 }
