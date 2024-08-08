import express from "express";
import User from "@/controllers/Users/UserController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";

const router = express.Router();
const user = new User();

router.post("/", verifyToken, user.list);
router.put("/", verifyToken, user.action);
router.patch("/status", verifyToken, user.updateStatus);
router.delete("/:id", verifyToken, user.delete);

export default router;
