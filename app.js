const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connection');
const logger = require('./utils/logger');
const redisClient = require('./config/redis');
const helmet = require('helmet');
const { port } = require('./config/env');

const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
const limiter = require('./middleware/rateLimiter');

app.use(express.json());
app.use(helmet());
app.use(errorHandler);
app.use(requestLogger);
app.use(limiter);

(async () => {
    await redisClient.connect();
})();

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