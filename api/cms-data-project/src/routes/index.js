const auth = require('./auth.js')
const portofolio = require('./portofolio.js')
const category = require('./category-portofolio.js')


module.exports = function (express) {
    const app = express()

    app.use('/auth', auth(express))
    app.use('/portofolio', portofolio(express))
    app.use('/category', category(express))
    return app
}