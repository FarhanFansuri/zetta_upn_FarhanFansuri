const  bookShelfModel  = require('../models/bookShelfModel');
const booksOfPurchasingModel = require('../models/booksOfPurchasingModel');
const  bookOfPurchasingModel  = require('../models/booksOfPurchasingModel');

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
async function getAllData(){
    return await bookShelfModel.find();
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

async function getDataProjection(column){
    const condition = {}
    condition[column] = 1;
    return await bookShelfModel.find({},condition);
}

async function manipulateDataAddFields(){
    return await bookShelfModel.aggregate([
        {$addFields : {after_discount : { $multiply : ["$price", 0.1]}}},
    ]);
}

async function manipulateDataUnwind(){
    return await bookShelfModel.aggregate([
        {$unwind: "$author"}
    ]);
}


async function manipulateDataMatch() {
    return await bookShelfModel.aggregate([
      {
        $match: {
          $or: [
            { price: { $lt: 100000 } },
            { title: "manusia  ikan" }
          ]
        }
      }
    ]);
  }

  async function manipulateDataSort() {
    return await bookShelfModel.aggregate([
      {
        $sort : {
            title : 1
        }
      }
    ]);
  }

  async function manipulateDataConcat() {
    return await bookShelfModel.aggregate([
      {
        $project : {
            bookinfo : {
                $concat : ["$title", "-", "info"]
            }
        }
      }
    ]);
  }

  async function manipulateDataLookUp() {
    return await booksOfPurchasingModel.aggregate([
      {
        $lookup : {
            from : "bookshelves",
            localField : "bookid" ,
            foreignField : "id",
            as : "details"
        }
      }
    ]);
  }


module.exports = {
    addData, 
    getData, 
    getAllData, 
    getDataElemMatch, 
    getDataDistinct, 
    getDataArrayFilter, 
    getDataProjection, 
    manipulateDataAddFields, 
    manipulateDataUnwind,
    manipulateDataMatch,
    manipulateDataSort,
    manipulateDataConcat,
    manipulateDataLookUp
}