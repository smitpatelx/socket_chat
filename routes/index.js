var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Netdevv' });
});

router.get('/chatapp', function(req, res, next) {
  res.render('chatapp', { title: 'Chat App' });
});

module.exports = router;
