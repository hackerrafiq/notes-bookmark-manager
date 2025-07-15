# 📓 Notes & 🔖 Bookmark Manager

A full-stack web application to manage your **notes** and **bookmarks** in one place. Built using **HTML**, **CSS (Tailwind)**, **JavaScript**, **Node.js**, **Express**, and **MongoDB Atlas**.



---

## ✨ Features

- 📝 Create, view, delete personal notes
- 🔖 Save and manage bookmarks with URLs
- 🔍 Real-time search/filter
- ☁️ Fully connected to MongoDB Atlas (data persists)
- ⚙️ Clean and responsive UI with Tailwind CSS

---

## 📷 Screenshots

### 🏠 Home Page
<img width="1362" height="618" alt="home png" src="https://github.com/user-attachments/assets/c5fd6da4-24f3-4f25-a531-bba3b352e7e5" />


### 📝 Notes Page
<img width="1078" height="509" alt="notes png" src="https://github.com/user-attachments/assets/4f1237f8-b207-4898-a3fb-df68d5432a31" />


### 🔖 Bookmarks Page
<img width="1074" height="579" alt="bookmark png" src="https://github.com/user-attachments/assets/47b51384-e93b-4f7a-ac6f-2a89091329f3" />


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
