const tokenService = require('../services/tokenService.js');
const userModel = require('../models/userModels.js');

// - add token from the Authorization header to the request// - `receiveToken` - middleware takes the token from the `Authorization` header if present and puts it on the request
function receiveToken(req, res, next) {
  if (req.headers.authorization) {
    req.authToken = req.headers.authorization.replace(/^Bearer\s/, '');
  }
  next();
};

// Check the token using tokenService and if it's good, allow access, if not, send back an error.
function restrict(req, res, next) {
  tokenService.verify(req.authToken)
    .then(data => {
      res.locals.user = data;
      next();
    })
    .catch(err => res.status(401).json({
      status: 'Error',
      message: 'Invalid credentials'
    }))
}

//  Create a new user and JWT for that user and send to client side.
function register(req, res) {
  userModel.register(req.body)
    .catch(err => res.status(401).json({
      message: 'Username taken'
    }))
    .then(data => tokenService.newToken({
        email: data.email,
        id: data.id
    }))
    .then(token => {
      res.json({
        token
      })
    });
}

function login(req, res, next) {
  userModel.login(req.body)
    .catch(err => res.status(401).json({
      status: 'Error',
      message: 'Invalid credentails'
    }))
    .then(data => tokenService.newToken({
      id: data.id,
      email: data.email
    }))
    .then(token => {
      res.json({
        token
      })
    })
}

module.exports = {
  receiveToken,
  register,
  restrict,
  login
}
