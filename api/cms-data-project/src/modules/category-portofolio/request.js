const { check } = require('express-validator');

exports.request = [check('name', 'The name field is requied.').not().isEmpty()]