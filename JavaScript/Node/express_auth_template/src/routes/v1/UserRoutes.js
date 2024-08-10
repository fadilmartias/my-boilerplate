import express from "express";
import UserController from "@/controllers/Users/UserController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";
import { sendVerifyEmailValidation, updateStatusValidation, actionValidation } from "@/validations/UserValidation.js";

const router = express.Router();
const user = new UserController();

router.get("/", verifyToken, user.list);
router.put("/", verifyToken, actionValidation, user.action);
router.patch("/:id/status", verifyToken, updateStatusValidation, user.updateStatus);
router.delete("/:id", verifyToken, user.delete);

router.get("/verify-email", user.verifyEmail); // update db
router.post("/verify-email", sendVerifyEmailValidation, user.sendVerifyEmail); // kirim email


export default router;
