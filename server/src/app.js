import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Base Route Test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Jarvis backend is running smoothly." });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is flying on http://localhost:${PORT}`);
});
