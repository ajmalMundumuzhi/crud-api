const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(mongo_uri,{
        dbName: 'crud',
    })

    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log(err))   
}

module.exports = connectDB;