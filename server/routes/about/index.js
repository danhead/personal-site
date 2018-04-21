const express = require('express');
const { join } = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(join(__dirname, 'about'), res.getPageData({
    slug: 'about',
    title: 'About Me | Daniel Head',
  }));
});

module.exports = router;
