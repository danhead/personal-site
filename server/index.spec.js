const request = require('supertest');
const server = require('./index');

describe('Test the server', () => {
  test('Should respond with 200 to a GET method', () => {
    return request(server).get('/').then(res => {
      expect(res.statusCode).toBe(200);
    });
  });
  test('Should respond with 404 to a POST method', () => {
    return request(server).post('/').then(res => {
      expect(res.statusCode).toBe(404);
    });
  });
});
