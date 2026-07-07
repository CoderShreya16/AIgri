# 🌱 AIgri

AIgri is an AI-powered smart agriculture platform developed as part of the AI-Assisted Full Stack Web Development Internship. The application helps farmers manage crop information through a modern web interface backed by a RESTful API and MongoDB database.

---

# 🚀 Features

- 🌾 Crop Management System (CRUD)
- 📊 Interactive Dashboard
- 🌙 Dark / Light Mode
- 📱 Fully Responsive Design
- 🧩 Reusable UI Component Library
- 🔗 Frontend Connected with Backend APIs
- ☁️ MongoDB Atlas Database Integration
- ⚡ RESTful API built with Express.js

---

# 🛠️ Tech Stack

## Frontend
- Next.js 16
- React.js
- Tailwind CSS v4

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Development Tools
- Thunder Client
- Git & GitHub
- Figma

---

# 📂 Project Structure

```text
AIgri/
│
├── app/
│   ├── about/
│   ├── dashboard/
│   ├── login/
│   ├── page.js
│   └── layout.js
│
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   └── Toast.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── ThemeProvider.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   │   └── Crop.js
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── docs/
│   └── schema.png
│
├── public/
└── README.md
```

---

# 🌿 Database Choice

AIgri uses **MongoDB Atlas** as the cloud database together with **Mongoose** as the Object Data Modeling (ODM) library.

### Why MongoDB?

- Flexible document-based database
- Easy integration with Node.js and Express
- Suitable for storing agricultural data
- Free cloud hosting through MongoDB Atlas
- Fast CRUD operations using Mongoose models

---

# 🗄️ Database Schema

The application currently stores crop information in a single MongoDB collection.
<img width="311" height="344" alt="W5_SchemaDiagram_26101432" src="https://github.com/user-attachments/assets/3c270ae6-fd55-4a49-9e69-5e2a657c8fd5" />


---

# 📡 REST API Endpoints

## Get All Crops

```http
GET /api/crops
```

Returns all crop records stored in MongoDB.

---

## Get Crop by ID

```http
GET /api/crops/:id
```

Returns a single crop by its MongoDB ObjectId.

---

## Search Crops

```http
GET /api/crops/search?q=rice
```

Returns crops matching the search keyword.

---

## Create Crop

```http
POST /api/crops
```

Creates a new crop record.

Example Body

```json
{
  "name": "Rice",
  "season": "Kharif",
  "disease": "Blast"
}
```

---

## Update Crop

```http
PUT /api/crops/:id
```

Updates an existing crop.

---

## Delete Crop

```http
DELETE /api/crops/:id
```

Deletes a crop from MongoDB.

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/CoderShreya16/AIgri.git
```

Move into the project

```bash
cd AIgri
```

Install frontend dependencies

```bash
npm install
```

Install backend dependencies

```bash
cd backend
npm install
```

---

# 🛢️ Database Setup

Create a `.env` file inside the **backend** folder using `.env.example`.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Create a free MongoDB Atlas cluster and replace the placeholder value with your own MongoDB connection string.

---

# ▶️ Running the Application

## Start Backend

```bash
cd backend
npm run dev
```

Backend runs at

```text
http://localhost:5000
```

---

## Start Frontend

Open another terminal

```bash
npm run dev
```

Frontend runs at

```text
http://localhost:3000
```

---

# 🧪 API Testing

The REST API was tested using **Thunder Client**.

Example

```http
GET http://localhost:5000/api/crops
```

The application supports complete CRUD operations:

- ✅ Create Crop
- ✅ Read Crop List
- ✅ Update Crop
- ✅ Delete Crop

---

# 🎨 UI Highlights

- Responsive Mobile / Tablet / Desktop Layout
- Modern Dashboard
- Dark & Light Theme Toggle
- Reusable Component Library
- Accessible Form Components
- Clean Navigation Experience

---

# 🔮 Future Enhancements

- 🤖 AI-based Crop Disease Detection
- 🌦️ Weather Forecast Integration
- 🔐 User Authentication
- 🌍 Multilingual Support
- 🎤 Voice Assistant for Farmers
- 📷 Image-based Disease Analysis
- 📈 Crop Analytics Dashboard

---

# 👩‍💻 Developed By

**Shreya Tripathi**

AI-Assisted Full Stack Web Development Internship Project

---

# 📄 License

This project is developed for educational and internship purposes.
