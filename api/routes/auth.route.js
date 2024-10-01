import express from "express";
import { signup, signin, google } from "../controllers/auth.controller.js"; // Ensure correct path
const router = express.Router();

// Define the signup route
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
export default router;
