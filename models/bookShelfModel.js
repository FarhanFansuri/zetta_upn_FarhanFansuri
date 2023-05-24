const mongoose = require('mongoose')

const bookShelfSchema = mongoose.Schema({
    id: Number,
    title: String,
    author:[ {
        name: String,
        tahun_lahir: Number
    }],
    price: Number,
    genre: {
        type:[String]
    }
})

module.exports = mongoose.model('bookshelves', bookShelfSchema)

