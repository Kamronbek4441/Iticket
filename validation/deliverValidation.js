const Joi = require("joi");

const validateDelivery = (delivery) => {
  const schema = Joi.object({
    name: Joi.string(),
  });

  return schema.validate(delivery);
};

module.exports = { validateDelivery };
