var express = require('express');
var router = express.Router();
var choresCtrl = require('../controllers/chores')

router.get('/chores/:id', isLoggedIn, choresCtrl.updateChore);
router.put('/chores/:id/edit', isLoggedIn, choresCtrl.update);
router.delete('/chores/:id', isLoggedIn, choresCtrl.delete);

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;