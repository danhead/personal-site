let config = {};

function getConfig() {
  return config;
}

function __setConfig(cfg) {
  config = cfg;
}

exports.getConfig = getConfig;
exports.__setConfig = __setConfig;
exports.updateConfig = jest.fn();
exports.fetchConfig = jest.fn();
