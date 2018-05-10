const locationsList = require('../models/locationsListModel');

function getAllVacations(req, res, next, err) {
  console.log('ListController')
  locationsList.getLocationsList()
    .then(data => {
      res.locals.vacation = data;
      console.log(data)
      next();
    })
    .catch(next)
}

module.exports = {
  getAllVacations
}
