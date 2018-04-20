const fs = jest.genMockFromModule('fs');

let mockFile = '{}';
let exists = true;

function readFileSync(file) {
  return mockFile;
}

function __setMockFile(file) {
  mockFile = file;
}

function existsSync() {
  return exists;
}

function __setExistsSync(e) {
  exists = e;
}

fs.readFileSync = readFileSync;
fs.__setMockFile = __setMockFile;
fs.existsSync = existsSync;
fs.__setExistsSync = __setExistsSync;

module.exports = fs;
