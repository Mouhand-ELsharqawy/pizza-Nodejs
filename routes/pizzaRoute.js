const express = require('express')
const router = express.Router()
const pizzaController = require('../controllers/pizzaController')
const pizzaModel = require('../models/pizzaModel')


router.get('/pizza',(req,res)=>{
    pizzaController.getAll(req,res)
})
router.get('/pizza/:id',(req,res)=>{ 
    pizzaController.show(req,res)
})

router.post('/pizza',(req,res)=>{
    pizzaController.create(req,res)
})

router.post('/pizza/:id',(req,res)=>{
    pizzaController.update(req,res)
})

router.delete('/pizza/:id',(req,res)=>{
    pizzaController.delete(req,res)
})


module.exports = router