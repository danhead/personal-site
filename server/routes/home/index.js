const express = require('express');
const { join } = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(join(__dirname, 'home'), res.getPageConfig({
    slug: '',
    title: 'Daniel Head | Full Stack Web Developer',
  }));
});

module.exports = router;
