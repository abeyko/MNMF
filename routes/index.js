var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MFMN' });
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

router.get('/userprofile', function(req, res, next){
    res.render('userprofile', { title: 'User Profile' });
});

router.get('/editprofile', function(req, res, next){
    res.render('editprofile', {title: 'Edit Profile'})
})
  

module.exports = router;
