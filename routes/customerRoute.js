const express = require('express')
const router = express.Router()
const customrController = require('../controllers/customerController')

router.get('/customers',(req,res)=>{
    customrController.getAll(req,res)
})
router.get('/customers/:id',(req,res)=>{
    customrController.findOne(req,res)
})
router.post('/customers',(req,res)=>{
    customrController.create(req,res)
})
router.post('/customers/:id',(req,res)=>{
    customrController.update(req,res)
})
router.delete('/customers/:id',(req,res)=>{
    customrController.delete(req,res)
})


module.exports = router