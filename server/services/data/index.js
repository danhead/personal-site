const { updateData, fetchData } = require('./data');
const getPageData = require('./getPageData');

module.exports = function index() {
  const data = fetchData();
  updateData(data);
  return function middleware(req, res, next) {
    res.getPageData = getPageData;
    next();
  };
};
