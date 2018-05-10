const db = require('../config/connection');

function creatingUsers(user) {
  console.log('usermodel')
  return db.one(`
    INSERT INTO users( name, email, hashpassword)
    VALUES ( $/name/, $/email/, $/hashpassword/)
    RETURNING *
  `, user)
}


module.exports = {
  creatingUsers
}
