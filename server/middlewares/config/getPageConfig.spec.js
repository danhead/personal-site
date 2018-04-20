const getPageConfig = require('./getPageConfig');
const { getConfig, __setConfig } = require('./config');

jest.mock('./config');

describe('Test the getPageConfig method', () => {

  beforeEach(() => {
    __setConfig({
      config: {
        foo: 'bar',
      },
    });
  });

  it('Should not modify the stored config object', () => {
    getPageConfig({ baz: 123 });
    expect(getConfig()).toEqual({
      config: {
        foo: 'bar',
      },
    });
  });

  it('Should return a merged object', () => {
    expect(getPageConfig({
      config: {
        baz: 123,
      },
      bar: 'foo',
    })).toEqual({
      config: {
        foo: 'bar',
        baz: 123,
      },
      bar: 'foo',
    });
  });
});
