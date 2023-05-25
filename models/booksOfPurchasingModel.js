const mongoose = require('mongoose')

const bookOfPurchasingSchema = mongoose.Schema({
    bookid: Number,
    amount: Number,
})

module.exports = mongoose.model('booksofpurchasings', bookOfPurchasingSchema)

