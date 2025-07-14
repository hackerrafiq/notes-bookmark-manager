const Bookmark = require('../models/Bookmark');

// Create a new bookmark
exports.createBookmark = async (req, res) => {
  try {
    const { url, title, description, tags } = req.body;
    const bookmark = new Bookmark({ url, title, description, tags });
    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all bookmarks with optional search and tags
exports.getBookmarks = async (req, res) => {
  try {
    const { q, tags } = req.query;
    let query = {};

    if (q) {
      query.$or = [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
      ];
    }

    if (tags) {
      const tagsArray = tags.split(',');
      query.tags = { $in: tagsArray };
    }

    const bookmarks = await Bookmark.find(query).sort({ createdAt: -1 });
    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single bookmark
exports.getBookmarkById = async (req, res) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(bookmark);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update bookmark
exports.updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
    res.json(bookmark);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete bookmark
exports.deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByIdAndDelete(req.params.id);
    if (!bookmark) return res.status(404).json({ error: 'Bookmark not found' });
    res.json({ message: 'Bookmark deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
