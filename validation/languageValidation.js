const Joi = require("joi");

const validateLanguage = (language) => {
  const schema = Joi.object({
    language: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(10).max(255).required(),
  });

  return schema.validate(language);
};

module.exports = { validateLanguage };
