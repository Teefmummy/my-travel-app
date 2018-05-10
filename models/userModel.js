const db = require('../config/connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Take an email and password; hash the password and try to create a new user
function register(credentials) {
  return bcrypt.hash(credentials.password, saltRounds)
    .then(hash => {
      const newUser = {
        email: credentials.email,
        pw_digest: hash
      };
      return db.one(`
        INSERT INTO users (email, pw_digest)
        VALUES ($/email/, $/pw_digest/)
        RETURNING id, email
      `, newUser)
    });
}

function findByEmail(email) {
  return db.one(`
    SELECT * FROM users
    WHERE email = $1
  `, email);
}

function login(credentials) {
  return findByEmail(credentials.email)
    .then(user => (
      // compare the provided password with the password digest
      bcrypt.compare(credentials.password, user.pw_digest)
        // match is a boolean if hashing the provided password
        // matches the hashed password
        .then(match => {
          if (!match) throw new Error('Credentials do not match');
          delete user.pw_digest;
          return user;
        })
    ));
}

module.exports = {
  register,
  login
}
