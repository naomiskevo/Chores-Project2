var express = require('express');
var router = express.Router();
var choresCtrl = require('../controllers/chores')

router.get('/chores/:id', choresCtrl.updateChore);
router.put('/chores/:id/edit', choresCtrl.update);
router.delete('/chores/:id', choresCtrl.delete);


module.exports = router;