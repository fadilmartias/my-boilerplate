import { body, validationResult } from "express-validator"
import { errorRes } from "@/utils/Response.js"

export const registerValidation = () => {
  return [
    body('name').trim().notEmpty().escape().isString(),
    body('username').trim().notEmpty().escape().isString(),
    body('email').trim().notEmpty().escape().isEmail(),
    body('phone').trim().escape(),
    body('password').trim().notEmpty().escape().isString(),
    body('confirm_password').trim().notEmpty().escape().isString().custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password')
      }
      return value
    })
  ]
}

export const loginValidation = () => {
  return [
    body('credential').trim().notEmpty().escape(),
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

  return errorRes(res, extractedErrors, 'Input Invalid', 422)
}