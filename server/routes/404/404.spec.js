const request = require('supertest');
const server = require('../../index');

describe('Test the server', () => {
  test('Should respond with 404 to an unknown URL', () => {
    return request(server).get('/404').then(res => {
      expect(res.statusCode).toBe(404);
    });
  });
  test('Should contain an error message', () => {
    return request(server).get('/404').then(res => {
      const error = '<h1>Page not found</h1>';
      expect(res.text.includes(error)).toBe(true);
    });
  });
  test('Should contain a back home link', () => {
    return request(server).get('/404').then(res => {
      const link = '<a class="Link" href="/">';
      expect(res.text.includes(link)).toBe(true);
    });
  });
});
