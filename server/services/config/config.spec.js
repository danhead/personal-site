const fs = require('fs');
const { getConfig, updateConfig, fetchConfig } = require('./config');

jest.mock('./defaults');
jest.mock('fs');

describe('Test the config module', () => {
  beforeEach(() => {
    fs.__mocks__.setExistsSync(true);
    fs.__mocks__.setMockFile('{}');
  });

  test('getConfig should return an object', () => {
    expect(getConfig()).toMatchObject({
      config: {
        stats_enabled: true,
        config_path: '/valid/path',
      },
    });
  });

  test('updateConfig should merge in new/updated data', () => {
    updateConfig({
      config: {
        stats_enabled: false,
      },
      test: 'foo',
    });
    expect(getConfig()).toMatchObject({
      config: {
        stats_enabled: false,
        config_path: '/valid/path',
      },
      test: 'foo',
    });
  });

  test('fetchConfig returns an empty object if file does not exist', () => {
    fs.__mocks__.setExistsSync(false);
    expect(fetchConfig()).toEqual({});
  });

  test('fetchConfig throws an error if file exists but contains invalid JSON', () => {
    fs.__mocks__.setMockFile('invalid JSON');
    expect(() => {
      fetchConfig();
    }).toThrow();
  });

  test('getConfig to contain updated data once fetchConfig has run', () => {
    fs.__mocks__.setMockFile(JSON.stringify({
      config: {
        stats_enabled: false,
      },
      foo: 'bar',
    }));
    fetchConfig();
    expect(getConfig()).toMatchObject({
      config: {
        stats_enabled: false,
        config_path: '/valid/path',
      },
      test: 'foo',
    });
  });
});
