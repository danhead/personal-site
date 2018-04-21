const fs = require('fs');
const { getData, updateData, fetchData } = require('./data');

jest.mock('./defaults');
jest.mock('fs');

describe('Test the config module', () => {
  beforeEach(() => {
    fs.__mocks__.setExistsSync(true);
    fs.__mocks__.setMockFile('{}');
  });

  test('getData should return an object', () => {
    expect(getData()).toMatchObject({
      config: {
        stats_enabled: true,
        data_path: '/valid/path',
      },
    });
  });

  test('updateData should merge in new/updated data', () => {
    updateData({
      config: {
        stats_enabled: false,
      },
      test: 'foo',
    });
    expect(getData()).toMatchObject({
      config: {
        stats_enabled: false,
        data_path: '/valid/path',
      },
      test: 'foo',
    });
  });

  test('fetchData returns an empty object if file does not exist', () => {
    fs.__mocks__.setExistsSync(false);
    expect(fetchData()).toEqual({});
  });

  test('fetchData throws an error if file exists but contains invalid JSON', () => {
    fs.__mocks__.setMockFile('invalid JSON');
    expect(() => {
      fetchData();
    }).toThrow();
  });

  test('getData to contain updated data once fetchData has run', () => {
    fs.__mocks__.setMockFile(JSON.stringify({
      config: {
        stats_enabled: false,
      },
      foo: 'bar',
    }));
    fetchData();
    expect(getData()).toMatchObject({
      config: {
        stats_enabled: false,
        data_path: '/valid/path',
      },
      test: 'foo',
    });
  });
});
