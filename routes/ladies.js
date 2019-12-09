var express = require('express');
var router = express.Router();
var ladiesCtrl = require('../controllers/ladies');
/* GET users listing. */
router.get('/', ladiesCtrl.index);
router.get('/:id', ladiesCtrl.show);
router.post('/:id/chores', isLoggedIn, ladiesCtrl.create);
module.exports = router;

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
