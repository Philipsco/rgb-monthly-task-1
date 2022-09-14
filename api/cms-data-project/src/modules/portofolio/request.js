const { check } = require('express-validator');

exports.request = [
  check('categoryId', 'The menu type field is requied.').not().isEmpty(),
  check('categoryId', 'The menu type value is invalid.').isIn(['1', '2','3']),
  check('name', 'The name field is requied.').not().isEmpty(),
  check('deskripsi', 'The deskripsi field is required.').not().isEmpty(),
  check('image', 'The image field value must be at least 0.').isInt({min:0})
]