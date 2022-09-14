const {category_portofolio} = require('./../../database/models')

let self = {}

self.create = async (data) => {
    return await category_portofolio.create(data)
}

self.delete = async (id,res) =>{
    const Category = await self.findOne(id,res)

    await Category.destroy()
}

self.update = async (id, data, res) => {
    const Category = await self.findOne(id,res)

    await Category.update(data)
    return await Category.reload()
}

self.findAll = async () => {
    return await category_portofolio.findAll({
        attributes:['id','name','createdAt']
    })
}


module.exports = self