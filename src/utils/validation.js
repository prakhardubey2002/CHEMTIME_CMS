const { check, validationResult } = require('express-validator');

exports.validatePost = [
  check('title', 'Title is required').notEmpty(),
  check('category', 'Category is required').notEmpty(),
  check('content', 'Content is required').notEmpty(),
  check('location', 'Location is required').notEmpty(),
];

exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
