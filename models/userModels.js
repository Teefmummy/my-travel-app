const db = require('../config/connection');

function creatingUsers(user) {
  console.log('usermodel')
  return db.one(`
    INSERT INTO users( name, email, hashpassword)
    VALUES ( $/name/, $/email/, $/hashpassword/)
    RETURNING *
  `, user)
}

function destroyUser(user) {
  return db.none(`
    DELETE FROM user
    WHERE name = $/name/
  `)
}


module.exports = {
  creatingUsers,
  destroyUser
}
