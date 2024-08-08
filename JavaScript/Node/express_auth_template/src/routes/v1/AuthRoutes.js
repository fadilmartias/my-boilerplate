import express from "express";
import { loginValidation, registerValidation } from "@/validations/AuthValidation.js";
import Auth from "@/controllers/Auth/AuthController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";

const router = express.Router();
const auth = new Auth();

router.post("/login", loginValidation, auth.login);
router.post("/register", registerValidation, auth.register);
router.post("/refreshToken", auth.refreshToken);
router.get("/logout", verifyToken, auth.logout);

export default router;
