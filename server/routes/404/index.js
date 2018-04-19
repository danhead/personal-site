const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(404).render(__dirname + '/404', {
    title: 'Page Not Found | Daniel Head',
  });
});

module.exports = router;
