const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create upload folder if it doesn't exist
const uploadFolder = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

const upload = multer({ storage });

// -------------------- ROUTES --------------------

// UPLOAD a single file
// Pass the file under 'file' in frontend form
router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
    url: `/api/files/${req.file.filename}`, // frontend can access it directly
  });
});

// UPLOAD multiple files (optional)
// Use array of files with same field name 'files'
router.post("/multiple", upload.array("files", 10), (req, res) => {
  if (!req.files || req.files.length === 0)
    return res.status(400).json({ message: "No files uploaded" });

  const files = req.files.map((file) => ({
    filename: file.filename,
    url: `/api/files/${file.filename}`,
  }));

  res.json({ message: "Files uploaded successfully", files });
});

// GET a single file
router.get("/:filename", (req, res) => {
  const filePath = path.join(uploadFolder, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }
  res.sendFile(filePath);
});

// DELETE a file
router.delete("/:filename", (req, res) => {
  const filePath = path.join(uploadFolder, req.params.filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error deleting file" });
    }
    res.json({ message: "File deleted successfully" });
  });
});

module.exports = router;
