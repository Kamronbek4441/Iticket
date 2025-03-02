const Joi = require("joi");

const validateEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().required(), 
    photo: Joi.string().optional(), 
    start_date: Joi.date().required(), 
    start_time: Joi.date().optional(), 
    finish_date: Joi.date().optional(),
    finish_time: Joi.string().optional(), 
    info: Joi.string().optional(), 
    event_type_id: Joi.number().integer().required(),    
    human_category_id: Joi.number().integer().optional(),  
    venue_id: Joi.number().integer().optional(), 
    lang_id: Joi.number().integer().optional(), 
    release_date: Joi.date().optional(), 
  });

  return schema.validate(event);
};

module.exports = { validateEvent };
