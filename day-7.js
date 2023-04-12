const express = require('express');
const app = express();
const port = 8080;
const { setTimeout } = require('timers/promises');
let purchasing = require('./purchasing');

app.use(express.json());
app.use(express.urlencoded({ extended : true}));


var amountOfBooks = 100;
var interest = 1;
let data = [];

function bookOfPurchasing(judulbuku,amountOfStocks, amountOfPurchasedBooks, installment, price){
    let termOfCredit = function () {
        success = false;
        return new Promise((resolve)=>{
            this.setTimeout(() => {
                success = true;
                if(success){
                    resolve(purchasing([{
                        title:judulbuku,
                        price:price*amountOfPurchasedBooks
                    }],
                    installment,
                    interest
                    ))
                }
            }, 2000);
    
    
        });
    }
    let amount = 0;
    let stokhabis = false;
    for(let i = 1; i<= amountOfPurchasedBooks; i++){
        if(amountOfStocks <= amount){
            stokhabis = true;
            break;
        }else{
            amount += 1;
        }
    }
    if(stokhabis == false){
        console.log(`Buku dibeli sejumlah ${amountOfPurchasedBooks}`)
        console.log(`Buku tersisa : ${amountOfStocks - amountOfPurchasedBooks}`);
        amountOfBooks -= amountOfPurchasedBooks;
        return termOfCredit()
    }else{
        console.log(`Buku hanya dapat dibeli sejumlah ${amount} dari ${amountOfPurchasedBooks} yang dipesan`)
        console.log(`Buku telah habis`);
        amountOfBooks = 0;
        return "purchasing failed"
    }
}


app.get('/book/purchasing',async(req,res)=>{
    const result  = await bookOfPurchasing(req.body.booktitle,amountOfBooks,req.body.amount,req.body.credit,req.body.price);
    data.push(result);
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});