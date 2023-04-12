const { setTimeout } = require('timers/promises');
let purchasing = require('./purchasing');

var amountOfBooks = 100;
var interest = 1;

function bookOfPurchasing(amountOfStocks, amountOfPurchasedBooks, installment, price){
    let termOfCredit = function () {
        success = false;
        return new Promise((resolve)=>{
            console.log("--processing credit--");
            this.setTimeout(() => {
                success = true;
                if(success){
                    resolve(purchasing([{
                        title:"book title",
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

async function run(){
    const result  = await bookOfPurchasing(amountOfBooks,3,4,100000);
        console.log(result);
}

run()

