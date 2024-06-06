const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userModel = require('./model/userSchema')
const router = require('./routes')
const PORT = 3001


// add middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//add mongo db
const DB_URl = mongoose.connect('mongodb+srv://eb20103087minhajwahid:personal@cluster0.qxacrr6.mongodb.net/')
mongoose.connection.on('connected',()=>console.log('mongo connected sucessfully'))
mongoose.connection.on('error',(err)=>console.log(err.message))

app.get('/',(req,res)=>{
    res.json({
        message: 'api hit'
    })
})



app.use(router)

app.listen(PORT,()=>console.log('server is up'))