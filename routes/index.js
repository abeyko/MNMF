var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
    res.render('profile', {title: 'Profile'});
});

router.get('/matches', function(req, res, next) {
    res.render('matches', {title: 'Matches'});
});

router.get('/interests', function(req, res, next) {
    res.render('interests', { title: 'Interests' });
  });


module.exports = router;
