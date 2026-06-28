# 🌱 AIgri

AIgri is an AI-powered smart agriculture platform designed to assist farmers with crop management, disease detection, and intelligent farming recommendations. The platform combines a modern frontend with a robust backend API to deliver real-time agricultural insights.

## 🚀 Features

* 🌾 Crop Recommendation System
* 📸 Crop Disease Detection
* 🎤 Voice Assistant Support
* 🌙 Dark/Light Mode Toggle
* 📱 Fully Responsive Design
* 🧩 Reusable UI Component Library
* 🔗 Frontend-Backend Integration
* 📡 REST API for Crop Management

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* React.js
* Tailwind CSS v4

### Backend

* Node.js
* Express.js

### Development Tools

* Thunder Client
* Git & GitHub
* Figma

---

## 📂 Project Structure

```bash
AIgri/
│
├── app/                     # Next.js App Router pages
├── components/             # Shared components
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Toast.jsx
│   │   └── Loader.jsx
│   └── ThemeProvider.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   └── server.js
│
├── public/
└── README.md
```

## 🎨 UI Features

* Responsive layout for Mobile, Tablet, and Desktop
* Professional dashboard interface
* Dark and Light theme support
* Reusable component architecture
* Modern and accessible design

---

## 🔌 API Endpoints

### Get all crops

```http
GET /api/crops
```

### Get crop by ID

```http
GET /api/crops/:id
```

### Search crops

```http
GET /api/crops/search?q=rice
```

### Add new crop

```http
POST /api/crops
```

### Update crop

```http
PUT /api/crops/:id
```

### Delete crop

```http
DELETE /api/crops/:id
```

---

## ⚙️ Installation and Setup

### Clone the repository

```bash
git clone https://github.com/CoderShreya16/AIgri.git
```

### Navigate to the project folder

```bash
cd AIgri
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd backend
npm install
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
cd backend
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## 🧪 API Testing

API endpoints were tested using Thunder Client.

Example:

```http
GET http://localhost:5000/api/crops
```

---

## 🔮 Future Enhancements

* AI-based disease prediction
* Real-time weather integration
* User authentication
* Database integration (MongoDB/Supabase)
* Multilingual support
* Voice-based farming assistance

---

## 👩‍💻 Developed By

**Shreya**
AI-Assisted Full Stack Web Development Internship Project

---

## 📄 License

This project is developed for educational and internship purposes.
