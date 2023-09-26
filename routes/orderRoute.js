const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/orders',(req,res)=>{
    orderController.getAll(req,res)
})
router.get('/orders/:id',(req,res)=>{
    orderController.show(req,res)
})

router.post('/orders',(req,res)=>{
    orderController.create(req,res)
})

router.post('/orders/:id',(req,res)=>{
    orderController.update(req,res)
})

router.delete('/orders/:id',(req,res)=>{
    orderController.delete(req,res)
})

module.exports = router 