const joi = require('joi');

exports.createdNoteSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
})