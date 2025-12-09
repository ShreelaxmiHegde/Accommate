const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required().min(5).max(50),
        desc : Joi.string().required().min(5).max(500),
        address : Joi.string().required().min(3).max(200),
        stateCity : Joi.string().required().min(3).max(50),
        nearestCampus : Joi.string().required().min(3).max(50),
        propertyType : Joi.string().required(),
        facilities : Joi.array().items(Joi.string()).required(),
        price : Joi.number().required().min(0),
        capacity : Joi.number().required().min(1).max(50)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required().min(3).max(500)
    }).required()
});