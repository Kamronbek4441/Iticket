const Joi = require("joi");

const validateGender = (gender) => {
  const schema = Joi.object({
    name: Joi.string().required().max(50),
  });

  return schema.validate(gender);
};

module.exports = { validateGender };
