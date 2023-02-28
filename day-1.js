//fungsi tax untuk menghitung tax dari price
function tax(price, tax){return price*(1+tax/100)}

//fungsi discount untuk menghitung price setelah discount
function discount(price, discount){return price*(1-discount/100)}

//fungsi discount untuk menghitung price setelah tax
function tax(price, tax){return price*(1+tax/100)}

//deklarasi
const price = 100000
const taxValue = 7
const discountValue = 12

function sentences(){
    return `
Amount of discount : ${discountValue}%
Price after discount : ${discount(price,discountValue)} Rupiah
Amount of tax : ${taxValue}
Price after tax : ${tax(price,taxValue)}
`
}

console.log(sentences());