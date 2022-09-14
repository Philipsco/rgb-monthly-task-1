const {portofolio} = require('./../../database/models')

let self = {}

self.findAll = async () =>{

    return await portofolio.findAll({
        attributes: ['id','judul_portofolio','deskripsi','image','categoryId','createdAt'],
        include: [{
            require: true,
            association:'category_portofolio',
            attributes: ['id','name']
        }]
    })
}

self.create = async (data) => {
    return await portofolio.create(data)
}

self.findByCategory = async (id,res)=>{
    const Portofolio = await portofolio.findAll({where: {categoryId:id}}, {
        attributes: ['id','judul_portofolio','deskripsi','image','categoryId','createdAt'],
        include: [{
            require:true,
            association: 'category_portofolio',
            attributes: ['id','name']
        }]
    })
    if (!Portofolio) {
        res.status(404).json({
            'message' : 'The requested data not found.'
        })
    }

    return Portofolio
}

self.findOneById = async (id,res) => {
    const Portofolio = await portofolio.findByPk(id, {
        attributes: ['id','judul_portofolio','deskripsi','image','categoryId','createdAt'],
        include: [{
            require:true,
            association: 'category-portofolios',
            attributes: ['id','name']
        }]
    })

    if (!Portofolio) {
        res.status(404).json({
            'message' : 'The requested data not found.'
        })
    }

    return Portofolio
}

self.update = async (id, data, res) => {
    const Portofolio = await self.findOne(id,res)

    await Portofolio.update(data)
    return await Portofolio.reload()
}

self.delete = async (id,res) => {
    const Portofolio = await self.findOne(id,res)

    await Portofolio.destroy()
}

module.exports = self