const mongoose = require('mongoose')
const customerSchema = require('../schema/customerSechema')

const customerModel = mongoose.model('customers',customerSchema)

module.exports = customerModel