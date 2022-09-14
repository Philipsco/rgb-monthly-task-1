const Controller = require('./../modules/portofolio/controller.js')
const auth = require('../middleware/auth.js')
const validation = require('../middleware/valid.js')
const {request} = require('../modules/portofolio/request.js')


module.exports = (express) => {
    const route = express.Router()

    route.get('/',validation,Controller.findAll)
    route.get('/:id',validation,Controller.findOneById)
    route.get('/category/:categoryId',validation,Controller.findByCategory)
    route.post('/',auth,request,validation,Controller.create)
    route.put('/:id',auth,request,validation,Controller.update)
    route.delete('/:id',auth,Controller.delete)

    return route

}