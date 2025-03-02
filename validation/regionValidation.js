const Joi = require("joi");

const validateRegion = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    postpone: Joi.number().integer().required(),
  });

  return schema.validate(data);
};

module.exports = { validateRegion };
