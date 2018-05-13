const checkUserRouter = require('express').Router();
const authenticationController = require('../controllers/authenticationController');
const responseController = require('../controllers/responseController');

checkUserRouter.route('/')
  .get(
    authenticationController.restrict,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
    )
checkUserRouter.route('/register')
  .post(
    authenticationController.register,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
  )
checkUserRouter.route('/login')
  .post(
    authenticationController.login,
    responseController.sendOkResponse,
    responseController.sendErrorResponse
    )

module.exports = checkUserRouter;
