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
    title: 'Daniel Head | Full Stack Web Developer',
  });
});

server.get('/about', (req, res) => {
  res.render('about', {
    slug: 'about',
    title: 'About Me | Daniel Head',
  });
});

server.get('*', (req, res) => {
  res.status(404).render('not-found', {
    title: 'Page Not Found | Daniel Head',
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
