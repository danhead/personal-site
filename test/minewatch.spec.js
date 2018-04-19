const request = require('supertest');
const server = require('../server');

describe('Test the server', () => {
  test('It should respond with 200 to a GET method', () => {
    return request(server).get('/minewatch/config').then(res => {
      expect(res.statusCode).toBe(200);
    });
  });
  test('It should contain a heading', () => {
    return request(server).get('/minewatch/config').then(res => {
      expect(res.text.includes('<h1>MineWatch</h1>')).toBe(true);
    });
  });
  test('It should contain a save link', () => {
    return request(server).get('/minewatch/config').then(res => {
      const link = '<a id="save" href="#">SAVE</a>';
      expect(res.text.includes(link)).toBe(true);
    });
  });

});
