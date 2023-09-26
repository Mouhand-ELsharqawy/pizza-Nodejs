const mongoose = require('mongoose')
const customerModel = require('../models/customerModel')

exports.getAll = async (req,res)=>{
    try{
        const customers = await customerModel.find()
        res.status(200).json({message:"here all the customers",customers})
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}
exports.create = async (req,res)=>{
    try{
        const createCustomer = await customerModel.create({
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            mobile: req.body.mobile,
            address:{
                district: req.body.district,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            email: req.body.email
        })
        res.status(200).json(createCustomer)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.findOne = async (req,res)=>{
    try{
        const findCustomer = await customerModel.findById(req.params.id)
        res.status(200).json(findCustomer)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.update = async (req,res)=>{
    try{
        const updateCustomer = await customerModel.findByIdAndUpdate(req.params.id,{
            name: {
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
            mobile: req.body.mobile,
            address:{
                district: req.body.district,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            email: req.body.email
        },{new:true})
        res.status(200).json({message: "Customer Data Updated", customer: updateCustomer})
    }catch(error){
        res.status(500).json({error: error.message })
    }
}
exports.delete = async (req,res)=>{
    try{
        const deleteCustomer = await customerModel.findByIdAndDelete(req.params.id)
        res.status(200).json('customer deleted')
    }catch(error){
        res.status(500).json({error: error.message })
    }
}