const  bookShelfModel  = require('../models/bookShelfModel');

async function addData(id,title,author,price, genres){
    await bookShelfModel.create({
        id : id,
        title : title,
        author : author ,
        price : price,
        genre: genres
    });
}

async function getData(id){
    return await bookShelfModel.find({id:id});
}

async function getDataElemMatch(tahun_lahir) {
    const data = await bookShelfModel.find({author : {$elemMatch : {tahun_lahir : {$gt : 1000}}}});
    console.log(data);
    return data;
}

async function getDataArrayFilter(){
    return await bookShelfModel.find({id:id});
}

async function getDataDistinct(){
    return await bookShelfModel.distinct("genre");
}


module.exports = {addData, getData, getDataElemMatch, getDataDistinct, getDataArrayFilter}