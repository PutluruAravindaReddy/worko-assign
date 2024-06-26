const Joi = require('joi');

const WorkoUserSchema = Joi.object({
    worko: Joi.object({
        name: Joi.string().allow('', null),
        age: Joi.number().integer().min(18).max(99).allow('', null),
        email: Joi.string().email().required(),
        city: Joi.string().allow('', null),
        zipcode: Joi.string().required(),
        image: Joi.string().allow('', null),
    }).required()
});

module.exports = { WorkoUserSchema };
