import express from "express";
import { loginValidation, registerValidation } from "@/validations/AuthValidation.js";
import Auth from "@/controllers/Auth/AuthControllerSQL.js";

const router = express.Router();
const auth = new Auth();

router.post("/login", loginValidation, auth.login);
router.post("/register", registerValidation, auth.register);
router.post("/refreshToken", auth.refreshToken);
router.get("/logout", auth.logout);

export default router;
