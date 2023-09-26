const mongoose = require('mongoose')

const pizzaSchema = new mongoose.Schema({
    type: {
        type:String,
        required: true
    },
    desc: {
        type: String,
        minLength:20
    }
},{
    timestamps:true
})

module.exports = pizzaSchema