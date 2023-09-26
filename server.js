const connect = require('./database/connection')
const express = require('express')
const customerRouter = require('./routes/customerRoute')
const pizzaRouter = require('./routes/pizzaRoute')
const userRouter = require('./routes/userRoute')
const orderRouter = require('./routes/orderRoute')
const paymentRouter = require('./routes/paymentRoute')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api',customerRouter)
app.use('/api',pizzaRouter)
app.use('/api',userRouter)
app.use('/api',orderRouter)
app.use('/api',paymentRouter)



const port =process.env.PORT || 3000;
connect();
app.listen(port,()=>{
    console.log('server started')
})


