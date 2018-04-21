const path = require('path');

module.exports = {
  config: {
    stats_enabled: false,
    config_path: path.resolve(__dirname, '../../../config.json'),
  },
};

