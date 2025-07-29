// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  description: String,
  cover: String,
  rating: Number,
  genre: { type: String, required: true },
  year: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
