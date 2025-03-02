const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string(),
    last_name: Joi.string(),
    phone: Joi.string(),
    hashed_password: Joi.string(),
    email: Joi.string(),
    birth_date: Joi.date(),
    gender: Joi.number(),
    lang_id: Joi.number(),
    hashed_refresh_token: Joi.string(),
  });

  return schema.validate(customer);
};

module.exports = { validateCustomer };
