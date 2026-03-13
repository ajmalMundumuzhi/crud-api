const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connection');
const port = process.env.PORT;
const logger = require('./middleware/logger');

const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/logger');
const limiter = require('./middleware/rateLimiter');

app.use(express.json());
app.use(errorHandler);
app.use(requestLogger);
app.use(limiter);

const noteRoutes = require('./routes/noteRoutes');
app.use('/api/v1/notes', noteRoutes);

connectDB()
    .then(() => {
        app.listen(port, () => {
            logger.info(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        logger.error(err)
    })