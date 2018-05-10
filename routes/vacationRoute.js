const vacationRouting = require('express').Router();

const vacation = require('../controllers/locationsListController');
const responseController = require('../controllers/responseController');

vacationRouting.route('/')
  .get(
    vacation.getAllVacations,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  );


module.exports = vacationRouting;
