const request = require('supertest');
const app = require('../server'); // make sure app is exported from server.js

describe('POST /plan-voyage', () => {
  it('should return a voyage plan', async () => {
    const res = await request(app)
      .post('/plan-voyage')
      .send({
        origin: 'Singapore',
        destination: 'Dubai',
        departure_time: '2025-06-20T08:00:00Z',
        weather: 'moderate',
        cargo_weight: 30000
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('eta');
    expect(res.body).toHaveProperty('fuel_estimate');
  });
});
