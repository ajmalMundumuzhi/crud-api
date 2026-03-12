const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI,{
        dbName: 'crud',
    })

    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.log(err))   
}

module.exports = connectDB;