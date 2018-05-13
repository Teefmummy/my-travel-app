const vacationDB = require('../models/locationsListModel');

function getAllVacations(req, res, next) {
  console.log('ListController')
  vacationDB.getLocationsList()
    .then(data => {
      res.locals.vacation = data;
      console.log('data', data)
      next();
    })
    .catch(next)
}

module.exports = {
  getAllVacations
}
