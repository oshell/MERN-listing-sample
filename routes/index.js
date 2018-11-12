var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET restaurants. */
router.get('/api/restaurants', function(req, res, next) {
  let contents = fs.readFileSync("database/restaurants.json");
  let restaurants = JSON.parse(contents);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(restaurants));
});

module.exports = router;
