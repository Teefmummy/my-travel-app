const userControl = require('../models/trpQuery');

function createUser(req, res, next) {
  return userControl.getOne(req.params.id)
    .then(data => {
      res.locals.user = data;
      console.log(user)
      next();
    })
    .catch(err)
}

function oneTrp( req, res, next) {
  console.log('hey')
  return userControl.getOne(req.params,id)
    .then(data => {
      console.log(data);
      res.locals.user = data;
      next();
    })
    .catch(err)
}

module.exports = {
  createUser,
  oneTrp
}
