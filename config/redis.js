const { createClient } = require('redis');
const logger = require('../utils/logger');

const redisClient = createClient({
    url: redis_uri,
})

redisClient.on("connect", () => {
    logger.info("Redis Connected Successfully");
})

redisClient.on("error", (err) => {
    logger.error("Redis Connection Error: ", err);
});

module.exports = redisClient;