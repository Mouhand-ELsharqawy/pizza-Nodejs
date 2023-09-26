const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    district: {
        type: String,
        required:true
    },
    street:{
        type:String,
        required:true,
        maxLength:100
    },
    building: {
        type:Number,
        required:true,
    },
    appartment: {
        type: Number
    }
})

const nameSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:1,
        maxLength:50
    },
    lastName: {
        type:String,
        minLength:1,
        maxLength:50
    }
})

const customerSechema = new mongoose.Schema({
    name: nameSchema,
    mobile:{
        type:String,
        required:true,
        minLength:11,
        maxLength:11
    },
    address: addressSchema,
    email:{
        type:String,
        required:true,
        minLength:10,
        unique:true
    }
},{
    timestamps:true
})

module.exports = customerSechema