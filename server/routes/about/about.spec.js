const request = require('supertest');
const server = require('../../index');

describe('Test the about page', () => {
  test('Should respond with 200 to a GET method', () => {
    return request(server).get('/about').then(res => {
      expect(res.statusCode).toBe(200);
    });
  });
  test('Should contain the navigation', () => {
    return request(server).get('/about').then(res => {
      const nav = '<nav class="NavBar">';
      const navLink = '<a class="Link Nav-link" href="/">Home</a>';
      expect(res.text.includes(nav)).toBe(true);
      expect(res.text.includes(navLink)).toBe(true);
    });
  });
  test('Should contain the footer', () => {
    return request(server).get('/about').then(res => {
      const footer = '<footer class="Footer">';
      const copywrite = '&copy; Daniel Head';
      expect(res.text.includes(footer)).toBe(true);
      expect(res.text.includes(copywrite)).toBe(true);
    });
  });
});
