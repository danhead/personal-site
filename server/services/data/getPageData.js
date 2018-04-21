const deep = require('object-assign-deep');
const { getData } = require('./data');

module.exports = function getPageData(data) {
  return deep({}, getData(), data);
};

