const userRouting = require('express').Router();

const trip = require('../controllers/UsersController');

userRouting.route('/')
  .get(trip.oneTrp)

module.exports = userRouting;
