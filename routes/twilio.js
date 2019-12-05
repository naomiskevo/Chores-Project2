const express = require('express');
const router = express.Router();
const twilioCtrl = require('../controllers/twilio');


router.post('/', twilioCtrl.sms);

module.exports = router;