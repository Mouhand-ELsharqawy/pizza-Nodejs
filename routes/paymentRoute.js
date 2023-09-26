 const express = require('express')
 const router = express.Router()
 const paymentController = require('../controllers/paymentController')


 router.get('/payments',(req,res)=>{
    paymentController.index(req,res)
 })
 router.get('/payments/:id',(req,res)=>{
    paymentController.show(req,res)
 })
router.post('/payments',(req,res)=>{
    paymentController.create(req,res)
})
router.post('/payments/:id',(req,res)=>{
    paymentController.update(req,res)
})
router.delete('/payments/:id',(req,res)=>{
    paymentController.delete(req,res)
})

 module.exports = router