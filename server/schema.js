// schema validation

const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required().min(5).max(30),
        desc : Joi.string().required().min(5).max(100),
        location : Joi.string().required(),
        state : Joi.string().required(),
        price : Joi.number().required().min(0),
        capacity : Joi.number().required().min(1).max(20),
        // image : Joi.string().allow("", null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required().min(3)
    }).required()
});