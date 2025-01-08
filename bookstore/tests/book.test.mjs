import request from 'supertest';
import { assert } from 'chai';
import app from '../../app.js';

describe('Book API Tests', () => {
  // Test: Add and Delete Book Review
  it('should add and delete a book review', async () => {
    const isbn = '123'; // Existing book ISBN
    const reviewData = { username: 'user1', review: 'Great book!' };

    await request(app)
      .post(`/books/${isbn}/reviews`)
      .send(reviewData);

    const response = await request(app)
      .delete(`/books/${isbn}/reviews`)
      .send(reviewData);

    assert.equal(response.status, 200);
    assert.isArray(response.body);
    assert.lengthOf(response.body, 0); // After deletion, reviews should be empty
  });

  // Test: Get Book Reviews
  it('should return reviews for a book', async () => {
    const isbn = '123'; // Existing book ISBN
    const response = await request(app).get(`/books/${isbn}/reviews`);
    assert.equal(response.status, 200);
    assert.isArray(response.body);
  });
});