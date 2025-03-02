const Joi = require("joi");

const validateStatus = (data) => {
  const schema = Joi.object({
    status: Joi.string().min(1).max(100).required(),
  });

  return schema.validate(data);
};

module.exports = { validateStatus };
