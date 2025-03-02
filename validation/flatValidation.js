const Joi = require("joi");

const validateFlat = (flat) => {
  const schema = Joi.object({
    floor: Joi.string().required(), 
    condition: Joi.string().optional(), 
  });

  return schema.validate(flat);
};

module.exports = { validateFlat };
