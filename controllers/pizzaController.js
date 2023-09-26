const pizzaModel = require('../models/pizzaModel')

exports.getAll = async (req,res)=>{
    try{
        const pizza = await pizzaModel.find()
        res.status(200).json({message: "Here All Pizza Type",pizza})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.create = async (req,res)=>{
    try{
        const createPizza = await pizzaModel.create({
            type: req.body.type,
            desc: req.body.desc
        })
        res.status(200).json({message: "pizza feild created",pizza: createPizza})
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}
exports.show = async (req,res)=>{
    try{
        const pizza = await pizzaModel.findById(req.params.id)
        res.status(200).json(pizza)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const updatePizza = await pizzaModel.findByIdAndUpdate(req.params.id,
            req.body,
            { new:true })

        res.status(200).json({message: "pizza updated",updatePizza})

    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.delete = async (req,res)=>{
    try{
        const deletePizza = await pizzaModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "pizza deleted"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}