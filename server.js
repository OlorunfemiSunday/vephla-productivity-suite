const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
const path = require("path");
const connectDB = require("./src/config/db");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/notes", require("./src/routes/notes"));
app.use("/api/tasks", require("./src/routes/tasks"));
app.use("/api/files", require("./src/routes/files"));

// Root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Welcome to Vephla Productivity Suite!");
});

// Socket.io setup
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => console.log("User disconnected"));
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
