let data = {};

exports.getData = function getData() {
  return data;
};

exports.updateData = jest.fn();

exports.fetchData = jest.fn();

exports.__mocks__ = {
  setData: function setData(newData) {
    data = newData;
  },
};
