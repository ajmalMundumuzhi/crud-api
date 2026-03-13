const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connection');
const port = process.env.PORT;

const errorHandler = require('./middleware/errorHandler');
const logger = require('./middleware/logger');
const limiter = require('./middleware/rateLimiter');

app.use(express.json());
app.use(errorHandler);
app.use(logger);
app.use(limiter);

const noteRoutes = require('./routes/noteRoutes');
app.use('/api/v1/notes', noteRoutes);

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })