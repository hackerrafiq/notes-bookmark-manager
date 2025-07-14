const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    match: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
