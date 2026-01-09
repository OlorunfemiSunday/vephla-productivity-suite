// testSocket.js
const { io } = require("socket.io-client");

// Connect to your Socket.io server
// Make sure the URL matches your server (e.g., localhost:5000)
const socket = io("http://localhost:5000");

// Fired when connected
socket.on("connect", () => {
  console.log("✅ Connected to server with ID:", socket.id);

  // Send a test message after connecting
  socket.emit("chatMessage", { message: "Hello from Node client!" });
});

// Fired when disconnected
socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

// Listen for chat messages from server
socket.on("chatMessage", (data) => {
  console.log("💬 Received message:", data.message);
});

// Listen for chat messages from client
socket.on("chatMessage", (data) => {
  console.log("💬 Received message:", data.message);
});