const controller = require('./../modules/auth/controller.js')
const validation = require('./../middleware/valid.js')
const { loginRequest } = require('./../modules/auth/request.js')

module.exports = function(express) {
  const route = express.Router();

  route.post('/login', loginRequest, validation, controller.login);

  return route;
}
