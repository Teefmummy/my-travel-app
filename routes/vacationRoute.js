const vacationRouting = require('express').Router();

const vacationController = require('../controllers/locationsListController');
const favoritesController = require('../controllers/favoritesController');
const responseController = require('../controllers/responseController');
const authenticationController = require('../controllers/authenticationController');

vacationRouting.route('/')
  .get(
    vacationController.getAllVacations,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )

vacationRouting.route('/favorites')
  .get(
    authenticationController.restrict,
    favoritesController.getFavorites,
    responseController.sendFavorites,
    responseController.sendErrorResponse
    )
  .post(
    authenticationController.restrict,
    favoritesController.addNewFavorite,
    responseController.sendFavorites,
    responseController.sendErrorResponse
    )
  .delete(
    authenticationController.restrict,
    favoritesController.deleteFavorite,
    responseController.sendFavorites,
    responseController.sendErrorResponse
    )



module.exports = vacationRouting;
