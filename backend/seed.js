// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Book from './models/Book.js';

// dotenv.config();

// await mongoose.connect(process.env.MONGO_URI);

// const books = [
//   { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', year: 1988 },
//   { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-help', year: 2018 },
//   { title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', year: 2008 },
//   { title: '1984', author: 'George Orwell', genre: 'Dystopian', year: 1949 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic', year: 1960 },
//   { title: 'The Pragmatic Programmer', author: 'Andy Hunt', genre: 'Programming', year: 1999 },
//   { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', genre: 'Psychology', year: 2011 },
//   { title: 'The Lean Startup', author: 'Eric Ries', genre: 'Business', year: 2011 },
//   { title: 'Zero to One', author: 'Peter Thiel', genre: 'Business', year: 2014 },
//   { title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'History', year: 2011 }
// ];

// await Book.insertMany(books);
// console.log('✅ Seed data inserted!');
// process.exit();

// backend/seed.js
// backend/seed.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

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
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    year: 1988,
    description: 'A philosophical journey of a shepherd.',
    cover: 'https://covers.openlibrary.org/b/id/8167896-L.jpg',
    rating: 5,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-help',
    year: 2018,
    description: 'An easy way to build good habits.',
    cover: 'https://covers.openlibrary.org/b/id/10524154-L.jpg',
    rating: 5,
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    year: 2008,
    description: 'A handbook of agile software craftsmanship.',
    cover: 'https://covers.openlibrary.org/b/id/7107986-L.jpg',
    rating: 4,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    year: 1960,
    description: 'A powerful tale of racial injustice.',
    cover: 'https://covers.openlibrary.org/b/id/8225261-L.jpg',
    rating: 5,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andy Hunt',
    genre: 'Programming',
    year: 1999,
    description: 'Your journey to mastery in coding.',
    cover: 'https://covers.openlibrary.org/b/id/10818473-L.jpg',
    rating: 4,
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    genre: 'Psychology',
    year: 2011,
    description: 'How we think and decide.',
    cover: 'https://covers.openlibrary.org/b/id/8759256-L.jpg',
    rating: 5,
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    genre: 'Business',
    year: 2011,
    description: 'Entrepreneurship in the 21st century.',
    cover: 'https://covers.openlibrary.org/b/id/7306012-L.jpg',
    rating: 4,
  },
  {
    title: 'Zero to One',
    author: 'Peter Thiel',
    genre: 'Business',
    year: 2014,
    description: 'Building the future by creating new things.',
    cover: 'https://covers.openlibrary.org/b/id/9612131-L.jpg',
    rating: 4,
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    genre: 'History',
    year: 2011,
    description: 'A brief history of humankind.',
    cover: 'https://covers.openlibrary.org/b/id/8372046-L.jpg',
    rating: 5,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    genre: 'Finance',
    year: 1997,
    description: 'Personal finance lessons for life.',
    cover: 'https://covers.openlibrary.org/b/id/8091016-L.jpg',
    rating: 4,
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: 'Finance',
    year: 2020,
    description: 'Timeless lessons on wealth and happiness.',
    cover: 'https://covers.openlibrary.org/b/id/10705234-L.jpg',
    rating: 5,
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    genre: 'Productivity',
    year: 2016,
    description: 'Rules for focused success in a distracted world.',
    cover: 'https://covers.openlibrary.org/b/id/8114151-L.jpg',
    rating: 4,
  },
  {
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    genre: 'Spirituality',
    year: 1997,
    description: 'A guide to spiritual enlightenment.',
    cover: 'https://covers.openlibrary.org/b/id/10404563-L.jpg',
    rating: 4,
  },
];

const seedBooks = async () => {
  try {
    await Book.deleteMany();
    await Book.insertMany(books);
    console.log('✅ Book data seeded');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedBooks();

