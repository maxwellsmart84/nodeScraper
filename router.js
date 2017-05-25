const express = require('express');
const scrape = require('./scrape.js');
const router = express.Router();

router.get('/scrape', scrape.getHotsData);

module.exports = router;
