const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render(__dirname + '/home', {
    slug: '',
    title: 'Daniel Head | Full Stack Web Developer',
  });
});

module.exports = router;
