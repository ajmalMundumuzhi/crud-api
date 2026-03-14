require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    mongo_uri: process.env.MONGO_URI,
    node_env: process.env.NODE_ENV || 'development',
    redis_uri: process.env.REDIS_URI,
}