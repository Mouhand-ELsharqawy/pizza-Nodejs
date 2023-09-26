const mongoose = require('mongoose') 
const orderSchma = require('../schema/orderSchema')

const orderModel = mongoose.model('orders',orderSchma)

module.exports = orderModel