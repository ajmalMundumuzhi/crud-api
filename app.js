const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connection');

const port = process.env.PORT;

app.use(express.json());

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })