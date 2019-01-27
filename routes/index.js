var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MFMN' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
    res.render('profile', {title: 'Profile'});
});

/* GET matches page. */
router.get('/matches', function(req, res, next) {
    res.render('matches', {title: 'Matches'});
});

/* GET interests page. */
router.get('/interests', function(req, res, next) {
    res.render('interests', { title: 'Interests' });
});

/* GET profile descriptions page. */
router.get('/profiledescriptions', function(req, res, next) {
    res.render('profiledescriptions', { title: 'ProfileDescriptions' });
});

/* GET message page. */
router.get('/message', function(req, res, next) {
    res.render('message', {title: 'Messaging'});
});

/* GET user profile page. */
router.get('/userprofile', function(req, res, next){
    res.render('userprofile', { title: 'User Profile' });
});

module.exports = router;
