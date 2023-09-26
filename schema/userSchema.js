const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        maxLength:50
    },
    middleName: {
        type: String,
        required:true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50
    }
})

const genderArray = ["male","female"]

const addressSchema = new mongoose.Schema({
    district:{
        type:String,
        required:true,
        maxLength:100
    },
    street: {
        type: String,
        required: true,
        minLength:1,
        maxLength:50
    },
    building: {
        type:Number,
        maxLength:75
    },
    department: {
        type: Number
    }
})

const userSechema = new mongoose.Schema({
    name: nameSchema,
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: addressSchema,
    gender: {
        type: String,
        required:true,
        maxLength:6,
        validate: {
            validator: v => genderArray.includes(v),
            message: "Enter real gender type"
        } 
    }
},{
    timestamps:true
})

module.exports = userSechema