# Vephla Productivity Suite -- Backend API

This project is a Node.js + Express-based backend API providing user
authentication, real-time socket communication, file upload handling,
and RESTful endpoints. It is built following MVC folder structure for
scalability and easy maintenance.

------------------------------------------------------------------------

## 🚀 Features

-   User Authentication (Signup & Login)
-   JWT-based Authorization
-   File Upload using Multer
-   Real-time communication using Socket.io
-   REST API endpoints for Notes management
-   Modular folder structure
-   Environment variable protection via `.env` and `.gitignore`

------------------------------------------------------------------------

## 📁 Folder Structure

    vephla-productivity-suite/
    │
    ├── config/
    │   └── db.js
    │
    ├── controllers/
    │   └── notesController.js
    │   └── userController.js
    │
    ├── middleware/
    │   └── authMiddleware.js
    │      │
    ├── models/
    │   └── User.js
    │   └── note.js
    │
    ├── routes/
    │   └── auth.js
    │   └── authRoutes.js
    │   └── files.js
    │   └── notes.js
    │   └── tasks.js
    │       │
    ├── uploads/   # Stores uploaded files
    │
    ├── testSocket.js
    ├── server.js
    ├── .env
    ├── .gitignore
    └── package.json

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

    git clone https://github.com/your-username/vephla-productivity-suite.git
    cd vephla-productivity-suite

### 2️⃣ Install dependencies

    npm install

### 3️⃣ Create a `.env` file

    PORT=5000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret

### 4️⃣ Start the server

    npm start

------------------------------------------------------------------------

## 🔌 API Endpoints

### Auth Routes

  Method   Endpoint      Description
  -------- ------------- ---------------
  POST     /api/signup   Register user
  POST     /api/login    Login user

### Notes Routes (Protected)

  Method   Endpoint         Description
  -------- ---------------- ----------------
  POST     /api/notes       Create a note
  GET      /api/notes       Get all notes
  GET      /api/notes/:id   Get note by ID
  PUT      /api/notes/:id   Update a note
  DELETE   /api/notes/:id   Delete a note

------------------------------------------------------------------------

## 🧪 Testing with Postman

1.  Create a new request.
2.  Select **POST** and enter the login endpoint.
3.  Add raw JSON body:

```{=html}
<!-- -->
```
    {
      "email": "example@example.com",
      "password": "123456"
    }

4.  Copy the returned **JWT token**.
5.  For protected routes, set Authorization:
    -   Type: **Bearer Token**
    -   Paste your token
6.  Test CRUD operations on notes.

------------------------------------------------------------------------

## 🖼 File Upload Example

Use this endpoint in Postman:

    POST /api/upload

-   Go to **Body**
-   Select **form-data**
-   Add key: `file` → type = *file*
-   Upload any image
-   Submit

------------------------------------------------------------------------

## 🔌 Socket.io Testing

To test the WebSocket connection:

### Create `testSocket.js`

    const io = require("socket.io-client");
    const socket = io("http://localhost:5000");

    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
      socket.emit("sendMessage", "Hello server!");
    });

    socket.on("messageFromServer", (msg) => {
      console.log("Server message:", msg);
    });

Run:

    node testSocket.js

------------------------------------------------------------------------

## 🔒 .gitignore Setup

    node_modules/
    .env
    /uploads/

------------------------------------------------------------------------

## ✨ Technologies Used

-   **Node.js**
-   **Express.js**
-   **MongoDB + Mongoose**
-   **Socket.io**
-   **Multer**
-   **JWT Authentication**

------------------------------------------------------------------------

## 📜 License

MIT License © 2026 Vephla Productivity Suite
