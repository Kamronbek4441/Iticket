const Joi = require("joi");

const validateTicket = (data) => {
  const schema = Joi.object({
    event_id: Joi.number().integer().required(),
    seat_id: Joi.number().integer().required(),
    price: Joi.number().integer().min(0).required(),
    service_fee: Joi.number().integer().min(0).required(),
    status_id: Joi.number().integer().required(),
    ticket_type: Joi.string().min(1).max(100).required(),
  });

  return schema.validate(data);
};

module.exports = { validateTicket };
