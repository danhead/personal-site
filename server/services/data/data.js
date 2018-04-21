const fs = require('fs');
const deep = require('object-assign-deep');
const defaults = require('./defaults');

const data = defaults;

function getData() {
  return data;
}

function updateData(newData) {
  deep(data, newData);
}

function fetchData() {
  let res = {};
  if (fs.existsSync(data.config.data_path)) {
    try {
      res = JSON.parse(fs.readFileSync(data.config.data_path));
    } catch (e) {
      throw new Error(e.message);
    }
  }
  return res;
}

exports.getData = getData;
exports.updateData = updateData;
exports.fetchData = fetchData;
