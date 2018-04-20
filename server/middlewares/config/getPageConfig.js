const deep = require('object-assign-deep');
const { getConfig } = require('./config');

module.exports = function getPageConfig(data) {
  return deep({}, getConfig(), data);
}

