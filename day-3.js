function stuffOfPurchasing(data, termOfCredits, interest) {
    data.forEach(element => {    
        let term = termOfCredits;   
        for(let i = 1; i <= term; i++){
            console.log(`Barang : ${element.title}`)
            console.log(`Jangka Kredit : ${i}`);
            console.log(`Bunga : ${interest/100*(element.price/termOfCredits)}`);
            console.log(`Total : ${element.price/termOfCredits + (interest/100*(element.price/termOfCredits))}`)
        }
    });
}

data = [
    {
        title:'motor',
        price:20000000
    },
    {
        title:'emas',
        price:5000000
    }
]

stuffOfPurchasing(data,4,1)