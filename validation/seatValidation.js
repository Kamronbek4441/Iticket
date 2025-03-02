const Joi = require("joi");

const validateSeat = (data) => {
  const schema = Joi.object({
    sector: Joi.number().integer().required(),
    row_number: Joi.string().min(1).max(50).required(),
    number: Joi.string().min(1).max(50).required(),
    venue_id: Joi.number().integer().required(),
    seat_type_id: Joi.number().integer().required(),
    location_in_schema: Joi.string().optional(),
  });

  return schema.validate(data);
};

module.exports = { validateSeat };
