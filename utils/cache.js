const redis = require('redis');

const invalidateCache = async () => {
    const keys = await redis.keys('notes:*');
    if(keys.length > 0) {
        await redis.del(keys);
    }
}