const vacationRouting = require('express').Router();

const vacationController = require('../controllers/locationsListController');
const responseController = require('../controllers/responseController');

vacationRouting.route('/')
  .get(
    vacationController.getAllVacations,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )


module.exports = vacationRouting;
