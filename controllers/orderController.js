const orderModel = require('../models/orderModel')
const customerModel = require('../models/customerModel')
const pizzaModel = require('../models/pizzaModel')

exports.getAll = async (req,res)=>{
    try{
        const orders = await orderModel.find()
        res.status(200).json({ 
            message: "here's the orders", orders })
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}


exports.show = async (req,res)=>{
    try{
        const order = await orderModel.findById(req.params.id)
        res.status(200).json(order)
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}


exports.create = async (req,res)=>{
    try{

        
        const CustomerID = await customerModel.find({mobile: req.body.customer}).sort({createdAt:-1}).findOne().select('_id')
        const pizzaID = await pizzaModel.find({type: req.body.pizza}).findOne().select('_id')


        const createOrder =  await orderModel.create({
            type: req.body.type,
            description: req.body.desc,
            customerId: CustomerID,
            pizzId: pizzaID,
            orderNumber: req.body.number
        })

        res.status(200).json(createOrder)
    }catch(error){
        res.status(500).json({error: error.message})
    }
} 

exports.update = async (req,res)=>{
    try{

        const CustomerID = await customerModel.find({mobile: req.body.customer})
        .sort({createdAt:-1})
        .findOne()
        .select('_id')

        
        const pizzaID = await pizzaModel.find({type: req.body.pizza})
        .findOne()
        .select('_id')

        const updateOrder = await orderModel.findByIdAndUpdate(req.params.id,{
            type: req.body.type,
            description: req.body.desc,
            customerId: CustomerID,
            pizzId: pizzaID,
            orderNumber: req.body.number
        },{
            new:true
        })
        res.status(200).json({message:"order update",updateOrder})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.delete = async (req,res)=> {
    try{
        const deleteOrder = await orderModel.findByIdAndDelete(req.params.id)
        res.status(200).json('order deleted')
    }catch(error){
        res.status(500).json()
    }
}
 