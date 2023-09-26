const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'orders',
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers',
        required: true
    },
    payDate: {
        type: Date,
        default: Date.now()
    },
    description: {
        type:String
    },
    amount: {
        type: Number,
        min:50
    }
},{
    timestamps:true
})

module.exports = paymentSchema;