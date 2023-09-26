const mongoose = require('mongoose')
const userSchema = require('../schema/userSchema')

const UserModel = mongoose.model("pizzaUsers",userSchema)

module.exports = UserModel;