var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Chore Chart'
    
  });
});
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/ladies',
    failureRedirect : '/ladies' 
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/ladies');
});

module.exports = router;
