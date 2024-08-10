import Joi from 'joi';
import { validate } from '@/middleware/InputValidation.js';

const actionSchema = Joi.object({
  id: Joi.optional(),
  name: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim(),
  password: Joi.string().trim().required(),
});

const sendVerifyEmailSchema = Joi.object({
  email: Joi.string().trim().email().required(),
})

const updateStatusSchema = Joi.object({
  status: Joi.string().valid('0', '1').trim().required(),
});

export const actionValidation = validate(actionSchema);
export const sendVerifyEmailValidation = validate(sendVerifyEmailSchema);
export const updateStatusValidation = validate(updateStatusSchema);

