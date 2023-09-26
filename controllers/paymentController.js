 const paymentModel = require('../models/paymentModel')
 const orderModel = require('../models/orderModel')
 const customerModel = require('../models/customerModel')

 exports.index = async (req,res)=>{
    try{
        const payments = await paymentModel.find()
        res.status(200).json({ message: "here are all the payments", payments })
    }catch(error){
        res.status(500).json({error: error.message })
    }
 }

 exports.create = async (req,res)=>{
  try{
    const orderID = await orderModel.findOne({orderNumber: req.body.orderNumber})
    .select('_id')

    const customerID = await customerModel.findOne({ email: req.body.email})
    .select('_id')


    const createPayment = await paymentModel.create({
        orderId: orderID,
        customerId: customerID,
        description: req.body.desc,
        amount: req.body.amount
    })
    res.status(200).json({ message: " user created", createPayment})
  } catch(error){
        res.status(500).json({error: error.message })
    } 
 }

 exports.show = async (req,res)=>{
    try{
        const payment = await paymentModel.findById(req.params.id)
        res.status(200).json({ payment })
    }catch(error){
        res.status(500).json({error: error.message })
    }
 }

 exports.update = async (req,res)=>{
    try{
        const orderID = await orderModel.findOne({orderNumber: req.body.orderNumber})
        .select('_id')

    const customerID = await customerModel.findOne({ email: req.body.email})
        .select('_id')

    
        const updatePayment = await paymentModel.findByIdAndUpdate(req.params.id,{
            orderId: orderID,
            customerId: customerID,
            description: req.body.desc,
            amount: req.body.amount
        },
        {new:true})
        res.status(200).json({ message: "payment updated", updatePayment })
    }catch(error){
        res.status(500).json({error: error.message })
    }
 }

 exports.delete = async (req,res) => {
    try{
        const payment = await paymentModel.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: " payment deleted" })
    }catch(error){
        res.status(500).json({error: error.message })
    }
 }