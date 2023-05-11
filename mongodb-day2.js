const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Books = require('./books-schema')
const port = 3000

//connect
mongoose.connect('mongodb://127.0.0.1:27017/',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.error(e)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/api/books/view',(req,res)=>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})