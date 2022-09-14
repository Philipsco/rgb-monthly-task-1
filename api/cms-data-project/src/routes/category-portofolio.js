const Controller = require('./../modules/category-portofolio/controller.js')
const auth = require('../middleware/auth.js')
const validation = require('../middleware/valid.js')
const {request} = require('../modules/category-portofolio/request.js')

module.exports = (express) => {
    const route = express.Router()
    route.get('/',validation,Controller.findAll)
    route.post('/',auth,request,validation,Controller.create)
    route.delete('/:id',auth,Controller.delete)
    route.put('/:id',auth,request,validation,Controller.update)
    return route
}