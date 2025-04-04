const express = require('express');
const { sendMail } = require('./mailController.js');

const router = express.Router();

router.post('/send-email', sendMail);

module.exports = router;
