const mongoose = require('mongoose')
const paymentSchema = require('../schema/paymentSchema')

const paymentModel = mongoose.model('payments',paymentSchema)

module.exports = paymentModel