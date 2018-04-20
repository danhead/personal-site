const { getConfig, updateConfig, fetchConfig } = require('./config');
const getPageConfig = require('./getPageConfig');

module.exports = function() {
  const config = fetchConfig();
  updateConfig(config);
  return function(req, res, next) {
    res.getPageConfig = getPageConfig;
    next();
  }
}
