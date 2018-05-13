const userControl = require('../models/userModel-bcrypt');

function createUser(req, res, next) {
  console.log('userController')
  userControl.creatingUsers(req.body)
    .then(data => {
      res.locals.user = data;
      console.log(data);
      next();
    })
    .catch(next)
}

module.exports = {
  createUser
}
