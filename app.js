const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connection');
const logger = require('./utils/logger');
const redisClient = require('./config/redis');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const cors = require('cors');

const { port } = require('./config/env');

const errorHandler = require('./middleware/errorHandler');
const requestLogger = require('./middleware/requestLogger');
const limiter = require('./middleware/rateLimiter');

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());


app.use(requestLogger);

app.use(limiter);

(async () => {
    await redisClient.connect();
})();

const noteRoutes = require('./routes/noteRoutes');
app.use('/api/v1/notes', noteRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use(errorHandler);

connectDB()
    .then(() => {
        app.listen(port, () => {
            logger.info(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        logger.error(err)
    })