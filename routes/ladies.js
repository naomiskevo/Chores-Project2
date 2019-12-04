var express = require('express');
var router = express.Router();
var ladiesCtrl = require('../controllers/ladies');
/* GET users listing. */
router.get('/', ladiesCtrl.index);

module.exports = router;
