import express from "express";
import { signup } from "../controllers/auth.controller.js"; // Ensure correct path

const router = express.Router();

// Define the signup route
router.post("/signup", signup);

export default router;
