const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    amount: Number
})

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;