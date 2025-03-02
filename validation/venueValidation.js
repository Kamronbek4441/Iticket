const Joi = require("joi");

const validateVenue = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    location: Joi.string().required(),
    site: Joi.string().optional(),
    phone: Joi.string().required(),
    venue_type_id: Joi.number().integer().required(),
    schema: Joi.string().optional(),
    region_id: Joi.number().integer().required(),
    district_id: Joi.number().integer().required(),
  });

  return schema.validate(data);
};

module.exports = { validateVenue };
