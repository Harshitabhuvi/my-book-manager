// 📁 backend/index.js
// import userRoutes from './routes/userRoutes.js'
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import bookRoutes from './routes/books.js';
// import authRoutes from './routes/auth.js';


// dotenv.config();

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', authRoutes);
// // Routes
// app.use('/api/books', bookRoutes);
// app.use('/api/users', userRoutes);

// // Use port from .env
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
// // Global error handler middleware (optional)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

//groke code
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
import connectDB from './config/db.js';
import bookRoutes from './routes/books.js';
// import userRoutes from './routes/userRoutes.js';
//  import authRoutes from './routes/auth.js';       // 🆕 optional
// import messageRoutes from './routes/messages.js'; // 🆕 optional


// Load environment variables
dotenv.config();

// Log MONGO_URI to verify it's loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Loaded successfully' : 'Not found in .env file');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);
// app.use('/api/users', userRoutes);
//  app.use('/api/auth', authRoutes);        // 🆕 optional
// app.use('/api/messages', messageRoutes); // 🆕 optional

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
