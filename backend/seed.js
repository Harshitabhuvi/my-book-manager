
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config(); // Load .env variables (e.g., MONGO_URI)

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    year: 1925,
    description: 'Classic American novel about the Jazz Age.',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    rating: 5,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    year: 1949,
    description: 'A chilling prediction of totalitarianism.',
    cover: 'https://covers.openlibrary.org/b/id/153541-L.jpg',
    rating: 4,
  },
  // ... (rest of your books)
];

const seedBooks = async () => {
  try {
    // Connect directly using MONGO_URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Book.deleteMany(); // Optional: wipe all existing books
    await Book.insertMany(books); // Insert seed books

    console.log('✅ Book data successfully seeded!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding books:', err.message);
    process.exit(1);
  }
};

seedBooks();
