const purch = require('./purchasing');
const data = require('./data.js')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/data', (req, res) => {
    purchasingdata =[{
        title : req.body.title,
        price : parseInt(req.body.price)
    }]
    customer = data.filter((data)=> data.name == req.body.name);
    if(customer.length > 0){
        res.json({
      
            name:req.body.name,
            member:true,
            data:purch(purchasingdata, parseInt(req.body.installment),parseInt(req.body.interest))
        });
    }else{
        res.send("not member");
    }
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});



