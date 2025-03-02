const Joi = require("joi");

const validateCustomerAddress = (customerAddress) => {
  const schema = Joi.object({
    customer_id: Joi.number(),
    name: Joi.string().required(),
    country_id: Joi.number(),
    region_id: Joi.number(),
    district_id: Joi.number(),
    street: Joi.string(),
    house: Joi.string(),
    flat: Joi.number(),
    location: Joi.string(),
    post_index: Joi.string(),
    info: Joi.string(),
  });

  return schema.validate(customerAddress);
};

module.exports = { validateCustomerAddress };
