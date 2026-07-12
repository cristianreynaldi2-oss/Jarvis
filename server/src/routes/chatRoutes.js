import express from "express";
import { handleChat } from "../controllers/chatController.js";

const router = express.Router();

// Jalur: POST /api/chat
router.post("/", handleChat);

export default router;
