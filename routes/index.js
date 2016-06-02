var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/games', function(req, res, next) {
  res.render('games');
});

// router.get('/rotatingCubes', function(req, res, next) {
//   res.render('rotatingCubesIntro');
// });

module.exports = router;
