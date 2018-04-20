const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render(__dirname + '/home', res.getPageConfig({
    slug: '',
    title: 'Daniel Head | Full Stack Web Developer',
  }));
});

module.exports = router;
