const Joi = require("joi");

const validateEventType = (eventType) => {
  const schema = Joi.object({
    name: Joi.string().required(), 
    parent_event_type_id: Joi.number().integer().required(),
  });

  return schema.validate(eventType);
};

module.exports = { validateEventType };
