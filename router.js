const express = require('express');
const scrape = require('./scrape.js');
const router = express.Router();

router.get('/frontPage', scrape.getFrontPageData);

module.exports = router;
