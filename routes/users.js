var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('You need to define a resource here, follow about.*');
});

module.exports = router;
