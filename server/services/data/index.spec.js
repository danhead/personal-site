const index = require('./index');
const { fetchData } = require('./data');

jest.mock('./data');

describe('Test the data middleware', () => {
  it('Should provide a Function', () => {
    expect(index).toBeInstanceOf(Function);
  });

  it('Should return the middleware', () => {
    const data = index();
    expect(data).toBeInstanceOf(Function);
  });

  it('Should accept exactly three parameters', () => {
    const data = index();
    expect(data.length).toBe(3);
  });

  it('Should call the third parameter', () => {
    const data = index();
    const fn = jest.fn();
    data({}, {}, fn);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Should run fetchData when called', () => {
    index();
    expect(fetchData).toHaveBeenCalled();
  });
});
