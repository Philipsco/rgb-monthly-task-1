const CategoryService = require('./service.js')

let self = {}

self.create = async (req,res) => {
    const data = await CategoryService.create(req.body)
    return res.status(200).json({data})
}

self.findAll = async (req,res) => {
    const data = await CategoryService.findAll()
    return res.status(200).json({data})
}

self.update = async (req,res) => {
    const id = req.params.id
    const body = req.body

    const data = await CategoryService.update(id,body)

    return res.status(200).json({data})
}

self.delete = async (req,res) =>{
    const id = req.params.id
    const data = await CategoryService.delete(id,res)

    return res.status(200).json()
}

module.exports = self