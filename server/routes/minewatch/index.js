const express = require('express');
const { join } = require('path');

const router = express.Router();

/**
 * Legacy support for Pebble app configuration
 * https://github.com/danhead/minewatch
 */
router.get('/', (req, res) => {
  res.render(join(__dirname, 'minewatch'));
});

module.exports = router;
