# 📓 Notes & 🔖 Bookmark Manager

A full-stack web application to manage your **notes** and **bookmarks** in one place. Built using **HTML**, **CSS (Tailwind)**, **JavaScript**, **Node.js**, **Express**, and **MongoDB Atlas**.

Live Demo 👉 [Visit on Render](https://your-live-link.onrender.com) <!-- Replace with your link -->

---

## ✨ Features

- 📝 Create, view, delete personal notes
- 🔖 Save and manage bookmarks with URLs
- 🔍 Real-time search/filter
- ☁️ Fully connected to MongoDB Atlas (data persists)
- ⚙️ Clean and responsive UI with Tailwind CSS

---

## 📷 Screenshots

| Home Page                          | Notes Page                          | Bookmarks Page                     |
|-----------------------------------|-------------------------------------|------------------------------------|
| ![index](./screenshots/index.png) | ![notes](./screenshots/notes.png)   | ![bookmarks](./screenshots/bookmarks.png) |

> 📸 Tip: Add screenshots in a `/screenshots` folder for better visibility

---

## 🛠 Tech Stack

| Frontend | Backend   | Database     |
|----------|-----------|--------------|
| HTML     | Node.js   | MongoDB Atlas|
| CSS (Tailwind) | Express.js | Mongoose ODM |
| JavaScript | REST APIs |             |

---

## 🧑‍💻 Getting Started (Run Locally)

### 1. Clone the repository

```bash
git clone https://github.com/hackerrafiq/notes-bookmark-manager.git
cd notes-bookmark-manager
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up .env file
Create a .env file in the root folder:

env
Copy
Edit
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
4. Start the server
bash
Copy
Edit
node server.js
App will be running at: http://localhost:5000

🚀 Deployment
This project is deployed on Render

MongoDB hosted on MongoDB Atlas

Environment variables securely stored on Render dashboard


💡 Future Features (Ideas)
✅ Login/Register with JWT

📤 Export notes/bookmarks to PDF

📦 Save to cloud storage (e.g., Cloudinary or Firebase)

📱 Mobile-responsive improvements
