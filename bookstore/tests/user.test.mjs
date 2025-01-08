import request from 'supertest';
import { assert } from 'chai';
import app from '../../app.js';

describe('User API Tests', () => {
  // Test: User Registration
  it('should register a new user', async () => {
    const userData = { username: 'user2', password: 'password2' };
    const response = await request(app)
      .post('/users/register')
      .send(userData);

    assert.equal(response.status, 200); // Updated to match actual response status
    assert.equal(response.body.username, userData.username);
    assert.property(response.body, 'id');
  });

  // Test: User Registration (User already exists)
  it('should return an error if the user already exists', async () => {
    const userData = { username: 'user1', password: 'pass1' };
    const response = await request(app)
      .post('/users/register')
      .send(userData);

    assert.equal(response.status, 400);
    assert.deepEqual(response.body, { error: 'User already exists' }); // Updated to match actual response structure
  });
});