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
    title: 'Web developer',
  });
});

server.get('/developer', (req, res) => {
  res.render('developer', {
    slug: 'developer',
    title: 'Web developer',
  });
});

server.get('*', (req, res) => {
  res.status(404).render('not-found', {
    title: 'Not found',
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
