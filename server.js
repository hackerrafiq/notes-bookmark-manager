const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// ✅ Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (CSS, JS, assets if needed)
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets'))); // Optional: for images/icons

// ✅ Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'notes.html'));
});
app.get('/bookmarks', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'bookmarks.html'));
});

// ✅ API Routes (make sure routes folder is correct)
const noteRoutes = require('./routes/notes.js');
const bookmarkRoutes = require('./routes/bookmarks.js');

app.use('/api/notes', noteRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ DB connection error:', err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
