const Joi = require("joi");

const validateVenuePhoto = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number().integer().required(),
    url: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = { validateVenuePhoto };
