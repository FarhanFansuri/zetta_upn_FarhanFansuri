const mongoose = require('mongoose')

const bookShelfSchema = mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    price: Number
})

module.exports = mongoose.model('bookshelves', bookShelfSchema)

