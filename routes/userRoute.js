const userRouting = require('express').Router();

const trip = require('../controllers/UsersController');
const responseController = require('../controllers/responseController');

userRouting.route('/')
  .post(
    trip.createUser,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );


module.exports = userRouting;
