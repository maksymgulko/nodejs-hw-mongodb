import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().min(3).max(30).required(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  email: Joi.string().min(3).max(30),
  isFavourite: Joi.boolean(),
  // userId: Joi.string()
  //   .pattern(/^[0-9a-fA-F]{24}$/)
  //   .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().min(3).max(30),
  contactType: Joi.string().valid('work', 'home', 'personal'),
  email: Joi.string().min(3).max(30),
  isFavourite: Joi.boolean(),
});
