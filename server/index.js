const express = require('express');
const path = require('path');
const routes = require('./routes');

const server = express();

server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, '../dist')));
server.use(express.static(path.join(__dirname, '../public')));
server.use(routes);

module.exports = server;
