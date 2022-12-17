const express = require('express');
const { createUrl, redirect } = require('../controller/url.controller.js');
const router = express.Router();

router.post('/longurl', createUrl)
router.get('/:urlid',  redirect)

module.exports = router