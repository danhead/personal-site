const express = require('express');
const router = express.Router();
const home = require('./home');
const about = require('./about');
const minewatch = require('./minewatch');
const notfound = require('./404');

router.use('/', home);
router.use('/about', about);
router.use('/minewatch/config', minewatch);
router.use('*', notfound);

module.exports = router;
