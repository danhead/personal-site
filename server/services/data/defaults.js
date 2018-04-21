const { resolve } = require('path');

module.exports = {
  config: {
    stats_enabled: false,
    data_path: resolve(__dirname, '../../../data.json'),
  },
};

