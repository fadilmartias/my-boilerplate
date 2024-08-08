import express from "express";
import User from "@/controllers/Users/UserController.js";
import { verifyToken } from "@/middleware/VerifyToken.js";

const router = express.Router();
const user = new User();

router.post("/", user.list);
router.put("/", user.action);
router.delete("/:id", user.delete);

export default router;
