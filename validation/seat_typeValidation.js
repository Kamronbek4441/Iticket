const Joi = require("joi");

const validateSeatType = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
  });

  return schema.validate(data);
};

module.exports = { validateSeatType };
