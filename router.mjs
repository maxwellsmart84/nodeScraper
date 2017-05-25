const express = require('express');
const scrape = require('./scrape.js');
const router = express.Router();

router.get('/scrape', scrape.getRows);

exports = module.exports = router;
