const express = require('express');
const { createUrl } = require('../controller/url.controller.js');
const router = express.Router();


router.post('/longurl', createUrl)

module.exports = router