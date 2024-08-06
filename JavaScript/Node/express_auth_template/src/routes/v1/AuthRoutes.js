import express from "express";
import { loginValidation, registerValidation, validate } from "@/validations/AuthValidation.js";
import Auth from "@/controllers/Auth/AuthController.js";

const router = express.Router();
const auth = new Auth();

router.post("/login", loginValidation(), validate, auth.login);
router.post("/register", registerValidation(), validate, auth.register);
router.post("/refreshToken", auth.refreshToken);
router.get("/logout", auth.logout);

export default router;
