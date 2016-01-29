'use strict';

module.exports = function(Joi) {
    return Joi.object().keys({
        Name: Joi.string().alphanum().min(2).max(255).required()
    });
};
