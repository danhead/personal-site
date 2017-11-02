const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, 'dist')));
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.render('index', {
    slug: '/',
    title: 'Daniel Head | Full stack Web developer',
  });
});

server.get('/about', (req, res) => {
  res.render('about', {
    slug: 'about',
    title: 'About me | Daniel Head',
  });
});

server.get('*', (req, res) => {
  res.status(404).render('not-found', {
    title: 'Page not found | Daniel Head',
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
