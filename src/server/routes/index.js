var express = require('express');
var router = express.Router();
var options = {
  // Initialization Options
};
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/movie_inventory_crud';
var db = pgp(connectionString);


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marketing' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Marketing' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Marketing' });
});

module.exports = router;
