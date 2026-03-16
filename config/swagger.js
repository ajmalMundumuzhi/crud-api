const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Notes API",
            version: "1.0.0",
            description: "Production-ready Notes API with Redis caching"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["../routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;