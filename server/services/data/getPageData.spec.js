const getPageData = require('./getPageData');
const { getData, __mocks__ } = require('./data');

jest.mock('./data');

describe('Test the getPageData method', () => {
  beforeEach(() => {
    __mocks__.setData({
      config: {
        foo: 'bar',
      },
    });
  });

  it('Should not modify the stored data object', () => {
    getPageData({ baz: 123 });
    expect(getData()).toEqual({
      config: {
        foo: 'bar',
      },
    });
  });

  it('Should return a merged object', () => {
    expect(getPageData({
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
