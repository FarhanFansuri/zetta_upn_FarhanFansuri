const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

//connect
mongoose.connect('mongodb://localhost:27017/books', ()=>{
    console.log("connected")
}, (e)=>{
    console.error(e)
})