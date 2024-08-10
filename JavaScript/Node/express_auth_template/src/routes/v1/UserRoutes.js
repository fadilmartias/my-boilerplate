import express from "express";
import UserController from "@/controllers/Users/UserController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";

const router = express.Router();
const user = new UserController();

router.get("/", verifyToken, user.list);
router.put("/", verifyToken, user.action);
router.patch("/:id/status", verifyToken, user.updateStatus);
router.delete("/:id", verifyToken, user.delete);

router.get("/verify-email", user.verifyEmail); // update db
router.post("/verify-email", user.sendVerifyEmail); // kirim email


export default router;
