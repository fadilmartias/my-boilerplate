import DOMPurify from "isomorphic-dompurify";
import { errorRes } from "@/utils/Response.js";

export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const extractedErrors = error.details.map((err) => ({
      [err.path[0]]: err.message,
    }));

    return errorRes(res, extractedErrors, "Input Invalid", 422);
  }

  // Sanitize user input (fields requiring sanitation)
  const sanitizedBody = {};
  for (const key in req.body) {
    // if (key === 'password' || key === 'confirm_password') {
    sanitizedBody[key] = DOMPurify.sanitize(req.body[key]);
    // } else {
    // sanitizedBody[key] = req.body[key];
    // }
  }

  // Replace req.body with the sanitized version
  req.body = sanitizedBody;

  next();
};
