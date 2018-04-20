const fs = require('fs');
const deep = require('object-assign-deep');
const defaults = require('./defaults');

let config = defaults;

function getConfig() {
  return config;
}

function updateConfig(data) {
  deep(config, data);
}

function fetchConfig() {
  let res = {};
  if (fs.existsSync(config.config_path)) {
    try {
      res = JSON.parse(fs.readFileSync(config.config_path));
    } catch(e) {
      throw new Error(e.message);
    }
  }
  return res;
}

exports.getConfig = getConfig;
exports.updateConfig = updateConfig;
exports.fetchConfig = fetchConfig;
