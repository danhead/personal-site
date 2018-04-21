let config = {};

exports.getConfig = function getConfig() {
  return config;
};

exports.updateConfig = jest.fn();

exports.fetchConfig = jest.fn();

exports.__mocks__ = {
  setConfig: function setConfig(cfg) {
    config = cfg;
  },
};
