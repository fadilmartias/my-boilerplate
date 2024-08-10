import express from "express";
import { loginValidation, registerValidation } from "@/validations/AuthValidation.js";
import AuthController from "@/controllers/Auth/AuthController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";
import passport from '@/config/Passport.js'
import {successRes} from '@/utils/Response.js'

const router = express.Router();
const auth = new AuthController();

router.post("/login", loginValidation, auth.login);
router.post("/register", registerValidation, auth.register);
router.post("/refreshToken", auth.refreshToken);
router.get("/logout", verifyToken, auth.logout);

router.post("/forgot-password", auth.forgotPassword);
router.post("/reset-password", auth.resetPassword);


// Google Auth
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Akses JWT yang dibuat
    const { accessToken, refreshToken } = req.authInfo;
    const user = req.user;
    // Berhasil login, redirect ke halaman lain (misalnya dashboard)
    return successRes(res, { accessToken, user }, "Success Login", 200,); // TODO: Redirect to after login fe
    
  }
);

export default router;
