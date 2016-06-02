var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/games', function(req, res, next) {
  res.render('games');
});

router.get('/rotating-cubes/single', function(req, res, next) {
  res.render('rotatingCubesSingle');
});

router.get('/rotating-cubes/single/phone', function(req, res, next) {
  res.render('rotatingCubesSinglePhone');
});

router.get('/rotating-cubes/multiplayer', function(req, res, next) {
  res.render('rotatingCubesMultiplayer');
});

router.get('/rotating-cubes/single/phone/player-1', function(req, res, next) {
  res.render('rotatingCubesMultiPhonePlayerOne.ejs');
});

router.get('/rotating-cubes/single/phone/player-2', function(req, res, next) {
  res.render('rotatingCubesMultiPhonePlayerTwo.ejs');
});

module.exports = router;
