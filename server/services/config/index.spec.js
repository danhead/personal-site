const index = require('./index');
const { fetchConfig } = require('./config');

jest.mock('./config');

describe('Test the config middleware', () => {
  it('Should provide a Function', () => {
    expect(index).toBeInstanceOf(Function);
  });

  it('Should return the middleware', () => {
    const config = index();
    expect(config).toBeInstanceOf(Function);
  });

  it('Should accept exactly three parameters', () => {
    const config = index();
    expect(config.length).toBe(3);
  });

  it('Should call the third parameter', () => {
    const config = index();
    const fn = jest.fn();
    config({}, {}, fn);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should run fetchConfig when called', () => {
    index();
    expect(fetchConfig).toHaveBeenCalled();
  });
});
