const Joi = require("joi");

const validateHuman = (human) => {
  const schema = Joi.object({
    name: Joi.string().required().max(100),
    Start_age: Joi.number().integer().min(0).required(),
    Finish_age: Joi.number().integer().min(0).required(),
    gender_id: Joi.number().integer().required(),
  });

  return schema.validate(human);
};

module.exports = { validateHuman };
