const userRouting = require('express').Router();

const usersController = require('../controllers/UsersController');
const responseController = require('../controllers/responseController');

userRouting.route('/register')
  .post(
    usersController.createUser,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );

userRouting.route('/login')
    .post(

    );


module.exports = userRouting;
