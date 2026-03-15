const mongoose = require('mongoose')
const { mongo_uri } = require('./env');

const connectDB = async () => {
    await mongoose.connect(mongo_uri,{
        dbName: 'crud',
    })

    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log(err))   
}

module.exports = connectDB;