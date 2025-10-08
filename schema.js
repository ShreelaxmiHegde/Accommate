// schema validation

const Joi = require("joi");

const listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required().min(5).max(50),
        desc : Joi.string().required().min(10),
        location : Joi.string().required(),
        state : Joi.string().required(),
        price : Joi.number().required().min(0),
        capacity : Joi.number().required().min(1),
        image : Joi.string().allow("", null)
    }).required()
});

module.exports = { listingSchema };