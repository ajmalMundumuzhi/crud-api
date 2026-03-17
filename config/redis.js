const { createClient } = require("redis");

let redisClient;

if (process.env.NODE_ENV !== "production") {
    redisClient = createClient({
        url: process.env.REDIS_URI
    });
} else {
    redisClient = {
        get: async () => null,
        set: async () => null,
        del: async () => null,
        connect: async () => {},
    };
}

module.exports = redisClient;

// not supported in render
// const { createClient } = require('redis');
// const logger = require('../utils/logger');
// const { redis_uri } = require('./env');

// const redisClient = createClient({
//     url: redis_uri,
// })

// redisClient.on("connect", () => {
//     logger.info("Redis Connected Successfully");
// })

// redisClient.on("error", (err) => {
//     logger.error("Redis Connection Error: ", err);
// });

// module.exports = redisClient;