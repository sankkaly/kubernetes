const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// API route (optional)
app.get("/api", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
