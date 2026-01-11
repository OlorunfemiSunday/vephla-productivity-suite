const Note = require("../models/note");

// CREATE NOTE
exports.createNote = async (req, res) => {
  try {
    const { title, content, tag } = req.body;
    const note = await Note.create({
      title,
      content,
      tag,
      author: req.user?.id, // if using authentication
    });
    res.status(201).json({ message: "Note created", note });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET ALL NOTES
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET NOTE BY ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// UPDATE NOTE
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note updated", note });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE NOTE
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
