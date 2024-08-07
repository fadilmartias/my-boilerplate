import Joi from 'joi';
import DOMPurify from 'dompurify';
import { errorRes } from '@/utils/Response.js';

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

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const extractedErrors = error.details.map((err) => ({
      [err.path[0]]: err.message,
    }));

    return errorRes(res, extractedErrors, 'Input Invalid', 422);
  }

  // Sanitize user input (fields requiring sanitation)
  const sanitizedBody = {};
  for (const key in req.body) {
    if (key === 'password' || key === 'confirm_password') {
      sanitizedBody[key] = DOMPurify.sanitize(req.body[key]);
    } else {
      sanitizedBody[key] = req.body[key];
    }
  }

  // Replace req.body with the sanitized version
  req.body = sanitizedBody;

  next();
};

export const loginValidation = validate(loginSchema);
export const registerValidation = validate(registerSchema);

