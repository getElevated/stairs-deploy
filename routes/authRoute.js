import express from "express";
import authController from "../controllers/authController.js";
import { authenticateToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.post("/forgot-Password", authController.forgotPassword);
router.get("/reset-password", authController.resetPassword);
router.put("/update-password", authController.updatePassword);
router.put("/change-password", authenticateToken, authController.changePasswordController);

export default router;


