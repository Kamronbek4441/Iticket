const Joi = require("joi");

const validateTicketType = (data) => {
  const schema = Joi.object({
    color: Joi.string().min(3).max(10),
    name: Joi.string().required(),
    ticket_id: Joi.number().integer().required(),
  });

  return schema.validate(data);
};

module.exports = { validateTicketType };
