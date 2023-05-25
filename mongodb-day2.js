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

app.get('/api/books/purchasing/view',(req,res)=>{

    bookShelfController.getAllData().then((data)=>{
        res.json(data);
    }).catch(err => console.error(err));
})

app.post('/api/books/purchasing/post',(req,res)=>{
    bookShelfController.addData(req.body.id, req.body.title, req.body.interest, req.body.amount, req.body.price).then(()=>{
        console.log('data succesfully added')
    }).catch(err=> console.log(err))
    res.send('processing')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})