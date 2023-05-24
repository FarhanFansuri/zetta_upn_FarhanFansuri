const  bookShelfModel  = require('../models/bookshelf');

async function addData(id,title,author,price){
    await bookShelfModel.create({
        id : id,
        title : title,
        author : author ,
        price : price
    });
}

async function getData(id){
    return await bookShelfModel.find({id:id});
}


module.exports = {addData, getData}