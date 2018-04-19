const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render(__dirname + '/about', {
    slug: 'about',
    title: 'About Me | Daniel Head',
  });
});

module.exports = router;
