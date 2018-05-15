const favoritesModel = require('../models/favoritesModel');

function getFavorites(req, res, next) {
  console.log('res',res.locals.user);
  favoritesModel.getAllFavorites(res.locals.user.id)
    .then(data => {
      res.locals.favorites = data;
      console.log('favoritescontroller: ', data);
      next();
    })
    .catch(next)
}
function addNewFavorite(req, res, next) {

  req.body.user_id = res.locals.user.id;
  console.log(req.body);
  favoritesModel.createFavorite(req.body)
  .then(data => {
    console.log('this is data', data)
    res.locals.favorites = data;
    console.log(data);
    next();
  })
  .catch(next);
}

function editFavorite(req, res, next) {
  req.body.user_id = res.locals.user.id;
  favoritesModel.updateFavorite(req.body)
  .then((data) => {
    console.log('this is the updated fave data', data)
    res.locals.favorites = data;
    next();
  })
}
function deleteFavorite(req, res, next) {
  req.body.user_id = res.locals.user.id;
  console.log(req.body)
  favoritesModel.deleteFavorite(req.body)
  .then(data => {
    console.log('deleted data: ', data)
    next()
  })
  .catch(next);
}


module.exports = {
  getFavorites,
  addNewFavorite,
  deleteFavorite,
   editFavorite
}
