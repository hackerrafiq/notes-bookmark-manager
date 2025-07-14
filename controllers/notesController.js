const Note = require('../models/Note');

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all notes with optional search and tags
exports.getNotes = async (req, res) => {
  try {
    const { q, tags } = req.query;
    let query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } },
      ];
    }

    if (tags) {
      const tagsArray = tags.split(',');
      query.tags = { $in: tagsArray };
    }

    const notes = await Note.find(query).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single note
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
