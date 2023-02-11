const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
const port=4000 || process.env.port
const mongoose=require('mongoose')
mongoose.set('strictQuery', true)
const url="mongodb://localhost:27017/books"
const web='mongodb+srv://koushik:Mn1MrKr1L45@cluster0.vkofmcq.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(web)
mongoose.connection.on('connected',()=>{console.log("connected to mongo")})
mongoose.connection.on('error',()=>{console.log("connection to mongo failed")})
require("./models/user.js")
require("./models/book.js")
app.use(express.json())
app.use(require('./routes/auth.js'))
app.use(require('./routes/book.js'))
app.listen(port,()=>{
    console.log("The server is running on port",port)
})