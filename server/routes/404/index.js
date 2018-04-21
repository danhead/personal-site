const express = require('express');
const { join } = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(404).render(join(__dirname, '404'), res.getPageConfig({
    title: 'Page Not Found | Daniel Head',
  }));
});

module.exports = router;
