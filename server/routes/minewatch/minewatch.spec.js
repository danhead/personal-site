const request = require('supertest');
const server = require('../../index');

describe('Test the server', () => {
  test('Should respond with 200 to a GET method', () => {
    return request(server).get('/minewatch/config').then(res => {
      expect(res.statusCode).toBe(200);
    });
  });
  test('Should contain a heading', () => {
    return request(server).get('/minewatch/config').then(res => {
      expect(res.text.includes('<h1>MineWatch</h1>')).toBe(true);
    });
  });
  test('Should contain a save link', () => {
    return request(server).get('/minewatch/config').then(res => {
      const link = '<a id="save" href="#">SAVE</a>';
      expect(res.text.includes(link)).toBe(true);
    });
  });

});
