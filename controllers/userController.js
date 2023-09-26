const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json({message: "here all users data", users: users})
    }catch(error){
        res.status(500).json({error: error.message })
    }
}

exports.create= async (req,res)=>{
    try{
        const createUser = await userModel.create({
            name:{
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName 
            },
            mobile: req.body.mobile,
            email: req.body.email,
            address: {
                district: req.body.district,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            gender: req.body.gender
        })
        res.status(200).json({message: "User Created",createUser})
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

exports.show = async (req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const updateUser = await userModel.findByIdAndUpdate(req.params.id,{
            name:{
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName 
            },
            mobile: req.body.mobile,
            email: req.body.email,
            address: {
                district: req.body.district,
                street: req.body.street,
                building: req.body.building,
                appartment: req.body.appartment
            },
            gender: req.body.gender
        },{new: true})
        res.status(200).json({ message: "User Updated",updateUser})
    }catch(error){
        res.status(500).json({message: error.message })
    }
} 

exports.delete = async (req,res)=>{
    try{
        const deleteUser = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "user deleted"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}