import express from 'express';
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from '../controllers/booksController.js';

import { bookValidationRules, validate } from '../middleware/validation.js';

const router = express.Router();

// router.route('/')
//   .get(getBooks)
//   .post(bookValidationRules(), validate, createBook);

// router.route('/:id')
//   .get(getBookById)
//   .put(bookValidationRules(), validate, updateBook)
//   .delete(deleteBook);
router.post('/', createBook);
router.get('/', getBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
