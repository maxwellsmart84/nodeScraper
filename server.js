const router = require('./router');

const express = require('express');
const app = express();

app.use('/', router);

app.listen('8080')

console.log('Magic happens on port 8080');

module.exports = app;
