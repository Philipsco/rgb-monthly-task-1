const { check } = require('express-validator');

exports.loginRequest = [
  check('email', 'The email field is requied.').not().isEmpty(),
  check('email', 'The email value must be a valid email format.').isEmail(),
  check('password', 'The password field is requied.').not().isEmpty(),
]
