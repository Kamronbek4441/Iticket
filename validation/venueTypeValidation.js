const Joi = require("joi");

const validateVenueType = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = { validateVenueType };
