const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/users',(req,res)=>{
    userController.getAll(req,res)
})

router.get('/users/:id',(req,res)=>{
    userController.show(req,res)
})

router.post('/users',(req,res)=>{
    userController.create(req,res)
})

router.post('/users/:id',(req,res)=>{
    userController.update(req,res)
})

router.delete('/users/:id',(req,res)=>{
    userController.delete(req,res)
})

module.exports = router