const Joi = require('joi');

exports.createdNoteSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
})