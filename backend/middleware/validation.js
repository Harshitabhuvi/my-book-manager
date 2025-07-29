// middleware/validation.js
import { body, validationResult } from 'express-validator';

const bookValidationRules = () => {
  return [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').optional().isString().withMessage('Author must be a string'),
    body('genre').optional().isString().withMessage('Genre must be a string'),
    body('year').optional().isNumeric().withMessage('Year must be a number'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { bookValidationRules, validate };
