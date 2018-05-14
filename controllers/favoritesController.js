const favoritesModel = require('../models/favoritesModel');

function getFavorites(req, res, next) {
  console.log('res',res.locals.user);
  favoritesModel.getAllFavorites(res.locals.user.id)
    .then(data => {
      res.locals.favorites = data;
      console.log(data);
      next();
    })
    .catch(next)
}
function addNewFavorite(req, res, next) {
  favoritesModel.createFavorite({
    ...req.body,
    user_id: res.locals.user.id
  })
  .then(data => {
    res.locals.favorites = data;
    console.log(data);
    next();
  })
  .catch(next);
}

module.exports = {
  getFavorites,
  addNewFavorite
}
