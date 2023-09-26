const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    type: {
        type:String,
        required:true
    },
    description: {
        type: String,
        minLength:20
    },
    customerId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'customers',
       required: true
    },
    pizzId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pizza',
        required: true
    },
    orderNumber:{
        type:Number
    }
},{
    timestamps: true
})

module.exports = orderSchema;