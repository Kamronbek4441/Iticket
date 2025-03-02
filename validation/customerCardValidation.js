const Joi = require("joi");

const validateCustomerCard = (customerCard) => {
  const schema = Joi.object({
    customer_id: Joi.number(),
    name: Joi.string(),
    phone: Joi.string(),
    number: Joi.number(),
    year: Joi.number(),
    month: Joi.number(),
    is_active: Joi.boolean(),
    is_main: Joi.boolean(),
  });

  return schema.validate(customerCard);
};

module.exports = { validateCustomerCard };
