const request = require('supertest');
const server = require('./index');

describe('Test the server', () => {
  test('Should respond with 200 to a GET method', () => request(server).get('/').then((res) => {
    expect(res.statusCode).toBe(200);
  }));
  test('Should respond with 404 to a POST method', () => request(server).post('/').then((res) => {
    expect(res.statusCode).toBe(404);
  }));
});
