import express from "express";
import { Login, Logout, Register, refreshToken } from "../../controllers/Auth/AuthController.js";
import { loginValidation, registerValidation, validate } from "../../validations/AuthValidation.js";

const router = express.Router();

router.post("/register", registerValidation(), validate, Register);
router.post("/login", loginValidation(), validate, Login);
router.post("/logout", Logout);
router.post("/refresh-token", refreshToken);

export default router;
