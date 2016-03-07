var express = require('express');
var router = express.Router();
var options = {
  // Initialization Options
};
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/movie_inventory_crud';
var db = pgp(connectionString);
// require('highcharts/modules/exporting')(Highcharts);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Marketing' });
});

module.exports = router;
