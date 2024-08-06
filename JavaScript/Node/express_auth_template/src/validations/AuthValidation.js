import { body, validationResult } from "express-validator"
import { errorRes } from "@/utils/response.js"

export const registerValidation = () => {
  return [
    body('first_name').trim().notEmpty().escape().isString(),
    body('last_name').trim().notEmpty().escape().isString(),
    body('email').trim().notEmpty().escape().isEmail(),
    body('password').trim().notEmpty().escape().isString(),
    body('confPassword').trim().notEmpty().escape().isString(),
  ]
}

export const loginValidation = () => {
  return [
    body('email').trim().notEmpty().escape().isEmail(),
    body('password').trim().notEmpty().escape().isString(),
  ]
}

export const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))

  errorRes(extractedErrors, 'Input Invalid', res, 422)
}