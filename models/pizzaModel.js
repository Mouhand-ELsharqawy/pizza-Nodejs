const mongoose = require('mongoose')
const pizzSchema = require('../schema/pizzaSchema')

const pizzaModel = mongoose.model('pizza',pizzSchema)

module.exports = pizzaModel