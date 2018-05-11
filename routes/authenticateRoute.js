const checkUser = require('express').Router();
const authenticationController = require('../controllers/authenticationController');

checkUser.get('/', authenticationController.restrict, (req, res) => res.json({
    user: res.locals.user
  }));
checkUser.post('/register', authenticationController.register);
checkUser.post('/login', authenticationController.login);


module.exports = checkUser;
