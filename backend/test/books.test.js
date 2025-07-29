import request from 'supertest';
import app from '../index.js'; // this is your Express app
import mongoose from 'mongoose';
import Book from '../models/Book.js'; // required so mongoose doesn't throw error

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Books API', () => {
  let bookId;

  it('POST /api/books - should create a new book', async () => {
    const res = await request(app).post('/api/books').send({
      title: 'Test Book',
      author: 'Tester',
      description: 'This is a test',
      cover: 'http://example.com/cover.jpg',
      rating: 4,
      genre: 'Sci-Fi',
      year: 2022,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Book');
    bookId = res.body._id;
  });

  it('GET /api/books - should return list of books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/books/:id - should return a single book', async () => {
    const res = await request(app).get(`/api/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(bookId);
  });

  it('PUT /api/books/:id - should update a book', async () => {
    const res = await request(app).put(`/api/books/${bookId}`).send({
      title: 'Updated Book',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Book');
  });

  it('DELETE /api/books/:id - should delete a book', async () => {
    const res = await request(app).delete(`/api/books/${bookId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Book deleted successfully');
  });
});
