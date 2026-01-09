const router = require("express").Router();
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

// Create a note
router.post("/", createNote);

// Get all notes
router.get("/", getNotes);

// Get a single note by ID
router.get("/:id", getNoteById);

// Update a note by ID
router.put("/:id", updateNote);

// Delete a note by ID
router.delete("/:id", deleteNote);

module.exports = router;
