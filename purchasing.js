function stuffOfPurchasing(data, installment, interest) {
    result = [];
    data.forEach(element => {    
        let term = installment;   
        for(let i = 1; i <= term; i++){
            bunga = (interest/100*(element.price/installment));
            total = element.price/installment + (interest/100*(element.price/installment));
            result.push({
                Barang:element.title,
                Jangka_Cicilan : i,
                Bunga : bunga,
                Total : total
            })
        }
    });
    return result;
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


module.exports = stuffOfPurchasing

