const { updateConfig, fetchConfig } = require('./config');
const getPageConfig = require('./getPageConfig');

module.exports = function index() {
  const config = fetchConfig();
  updateConfig(config);
  return function middleware(req, res, next) {
    res.getPageConfig = getPageConfig;
    next();
  };
};
