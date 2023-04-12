const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

//readfile
function read(){
    return new Promise((resolve, reject) =>{
        const data = fs.readFile('./file.txt','utf-8',(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject("file tidak dapat diambil");
            }
           
        });
        return data;
    })
}

//endpoint 1
app.get('/endpoint/1',async function(req, res){
    
    try{
        const data = await read();
        console.log(data);
        res.send(data);
    }catch(err){
        console.log(err);
        res.send(err);
    }
    
})
//endpoint 2
app.get('/endpoint/2',function(req, res){
    read().then((result) => {
        console.log(result);
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})