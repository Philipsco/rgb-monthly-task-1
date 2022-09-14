const PortofolioServie = require('./service.js')

let self = {}

self.findAll = async (req,res) => {
    const data = await PortofolioServie.findAll()

    return res.status(200).json({data})
}

self.create = async (req,res) => {
    const data = await PortofolioServie.create(req.body)

    return res.status(200).json({data})
}

self.findOneById = async (req,res) => {
    const id = req.params.id
    const data = await PortofolioServie.findOneById(id,res)

    return res.status(200).json({data})
}

self.findByCategory = async (req,res) => {
    const categoryId = req.params.categoryId
    const data = await PortofolioServie.findByCategory(categoryId,res)

    return res.status(200).json({data})
}

self.update = async (req,res) => {
    const id = req.params.id
    const body = req.body

    const data = await PortofolioServie.update(id,body,res)

    return res.status(200).json({data})
}

self.delete = async (req,res) => {
    const id = req.params.id

    const data = await PortofolioServie.delete(id,res)

    return res.status(200).json()
}

module.exports = self