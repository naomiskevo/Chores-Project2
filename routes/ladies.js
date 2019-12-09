var express = require('express');
var router = express.Router();
var ladiesCtrl = require('../controllers/ladies');
/* GET users listing. */
router.get('/', ladiesCtrl.index);
router.get('/:id', ladiesCtrl.show);
router.post('/:id/chores', ladiesCtrl.create);
module.exports = router;


