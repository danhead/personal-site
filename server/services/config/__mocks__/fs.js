const fs = jest.genMockFromModule('fs');

let mockFile = '{}';
let exists = true;

fs.readFileSync = function readFileSync() {
  return mockFile;
};

fs.existsSync = function existsSync() {
  return exists;
};

fs.__mocks__ = {
  setMockFile: function setMockFile(file) {
    mockFile = file;
  },
  setExistsSync: function setExistsSync(e) {
    exists = e;
  },
};

module.exports = fs;
