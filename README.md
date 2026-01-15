
# Vephla Productivity Suite – Backend API

A powerful backend system built using **Node.js**, **Express**, **MongoDB**, and **Socket.io**, designed to support productivity tools such as notes, tasks, real-time messaging, and file uploads.  
The project follows a clean, modular **MVC architecture** for scalability and maintainability.

---

## 🌟 Features

### 🔐 User Authentication & Security
- User Signup & Login
- Password hashing with bcryptjs
- JWT-based authorization
- Protected routes using middleware

### 📝 Notes Management (CRUD)
- Create notes
- Get all notes
- Get single note by ID
- Update notes
- Delete notes

### 📤 File Upload Handling
- Upload files using Multer
- Auto-creates upload directory
- Generates unique filenames

### 🔌 Real-Time Socket.io Support
- Bi-directional communication
- Ready for live chat
- Message broadcasting

---

## 📁 Folder Structure

```
vephla-productivity-suite/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── notesController.js
│   └── userController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Note.js
│
├── routes/
│   ├── auth.js
│   ├── authRoutes.js
│   ├── files.js
│   ├── notes.js
│   └── tasks.js
│
├── uploads/
│
├── testSocket.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

## ⚙️ Installation

### 1️⃣ Clone Repo
```bash
git clone https://github.com/olorunfemi-sunday/vephla-productivity-suite.git
cd vephla-productivity-suite
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Add Environment Variables
Create `.env`:
```
MONGO_URI=mongodb://127.0.0.1:27017/vephla_productivity_suite
JWT_SECRET=yourSecretKey123
PORT=5000
```

### 4️⃣ Start Server
```bash
npm start
```

---

## 🔌 API Endpoints

### Auth Routes
| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| POST   | /api/signup  | Register          |
| POST   | /api/login   | Login             |

### Notes Routes
| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | /api/notes        | Create note         |
| GET    | /api/notes        | Get notes           |
| GET    | /api/notes/:id    | Get note by ID      |
| PUT    | /api/notes/:id    | Update note         |
| DELETE | /api/notes/:id    | Delete note         |

---

## 🧪 Testing Notes CRUD
Use Postman:

1. **Login** → get token  
2. **Set Authorization** → Bearer Token  
3. Test endpoints normally  

---

## 📤 File Upload

### POST `/api/upload`
- Go to Body → form-data
- Key: `file` (type: file)
- Upload image/file

---

## 🔌 Socket.io Test

Create `testSocket.js`:

```js
const io = require("socket.io-client");
const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("Connected:", socket.id);
  socket.emit("sendMessage", "Hello!");
});

socket.on("messageFromServer", (msg) => {
  console.log("Server:", msg);
});
```

Run:
```bash
node testSocket.js
```
 
 
