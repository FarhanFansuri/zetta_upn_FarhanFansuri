#MONGODB DAY 1

#check database
show dbs;

#use database
use "database"

#view collections
show collections

#drop db
db.dropDatabase();

#buatprofile
db.profile.insertOne({username:"chik",address:"123 North St",hobbies:["membaca","bermusik"]})

#lihat data collection
db.profile.find({key:value},{key:1/0})
.sort({key:-1/1})
.limit();
find({key:{
    $eq:value
    $neq: value
    $in : ["val1", "val2"]
    $nin : ["val1", "val2"]
    $exists: true/false
    $gte: number
    $lte: number2
}})

.find({
    $and:[
        {key1: value},
        {key2: value}
    ]
    $expr:{
        $gt:[
            value,value2 #is value grater than value 2
        ]
    }
})

#update document
db.profile.updateOne(
    {(condition)},
    {$set:{
        key: value2
    }
    $rename:{
        key: key2
    }
    $unset: {
        key:""
    }
    $push:{
        key: valuepush
    }
    }
)

#replace
db.collection.replaceOne({condition},{hapus semua object lalu ganti dengan apapun yang ada di sini})

#hitung dokumen
db.collection.countDocuments(condition)

#drop/delete dokumen
db.profile.drop({username:"farhan"});

#---------------------------------------------------------------------------------------------------
#   TUGAS MONGODB DAY 1
#---------------------------------------------------------------------------------------------------


# create collection called profile with complete address as embedded document & hobbies as array
user users
# 1. insert your profile
db.profile.insertOne({name:"farhan", address: "jalan saturnus no x", hobbies:["membaca","menulis","bermain musik"]})
# 2. get your profile
db.profile.find()
# 3. update your profile
db.profile.updateOne({name:"farhan"},{$set:{address:"rumah baru"}})
# 4. delete your profile
db.profile.drop({name:"farhan"})
