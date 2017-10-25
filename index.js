const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const server = express();

server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, 'dist')));
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
  res.render('index', {
    title: 'Web developer',
  });
});

server.get('/web-dev', (req, res) => {
  res.render('web-dev', {
    title: 'Web developer',
    back: true,
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
