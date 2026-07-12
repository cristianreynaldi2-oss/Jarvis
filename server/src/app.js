import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Supaya server bisa membaca data JSON yang dikirim client

// Base Route Test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Jarvis backend is running smoothly." });
});

// Jalur Routing API
app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is flying on http://localhost:${PORT}`);
});
