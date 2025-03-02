const Joi = require("joi");

const validatePayment = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
  });

  return schema.validate(data);
};

module.exports = { validatePayment };
