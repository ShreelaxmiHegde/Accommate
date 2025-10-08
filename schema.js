// schema validation

const Joi = require("joi");

const listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        desc : Joi.string().required(),
        location : Joi.string().required(),
        state : Joi.string().required(),
        price : Joi.number().required().min(0),
        capacity : Joi.number().required().min(1),
        image : Joi.string().allow("", null)
    }).required()
});

module.exports = { listingSchema };