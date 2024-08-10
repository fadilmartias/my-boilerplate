import Joi from 'joi';
import { validate } from '@/middleware/InputValidation.js';

const registerSchema = Joi.object({
  name: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim(),
  password: Joi.string().trim().required(),
  confirm_password: Joi.string().trim().required().valid(Joi.ref('password')),
});

const loginSchema = Joi.object({
  credential: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().trim().email().required(),
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  confirm_password: Joi.string().trim().required().valid(Joi.ref('password')),
});

export const loginValidation = validate(loginSchema);
export const registerValidation = validate(registerSchema);
export const forgotPasswordValidation = validate(forgotPasswordSchema);
export const resetPasswordValidation = validate(resetPasswordSchema);


