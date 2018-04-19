const express = require('express');
const router = express.Router();

/**
 * Legacy support for Pebble app configuration
 * https://github.com/danhead/minewatch
 */
router.get('/', (req, res) => {
  res.render(__dirname + '/minewatch');
});

module.exports = router;
