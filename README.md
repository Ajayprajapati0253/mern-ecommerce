# Video Learning Platform

A full-stack MERN Video Learning Platform built using React.js, Node.js, Express.js, MongoDB, and JWT Authentication.

This platform allows users to:

- Register & Login
- Secure Authentication using JWT
- Add Videos
- Edit Videos
- Delete Videos
- Search Videos
- Protected Dashboard Access

---

# Live Demo

Frontend Live Link:  
[PASTE_FRONTEND_LINK_HERE](https://mern-ecommerce-gamma-murex.vercel.app)

Backend Live Link:  
[PASTE_BACKEND_LINK_HERE](https://video-learning-backend.onrender.com)

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Folder Structure

```bash
project-root/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality

## Video Management
- Add Video
- Edit Video
- Delete Video
- Search Videos
- Responsive Video Grid
- Real MongoDB Storage

## UI Features
- Responsive Design
- Professional Dashboard UI
- Toast Notifications
- Protected Navigation
- Sidebar Layout

---

# Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Ajayprajapati0253/mern-ecommerce.git
```

---

## 2. Open Project

```bash
cd project-folder
```

---

# Backend Setup

## Go to server folder

```bash
cd server
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Open new terminal

```bash
cd client
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

# Authentication APIs

## Register User

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Ajay",
  "email": "ajay@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "ajay@gmail.com",
  "password": "123456"
}
```

---

# Video APIs

## Get All Videos

```http
GET /api/videos
```

---

## Get Single Video

```http
GET /api/videos/:id
```

---

## Create Video

```http
POST /api/videos
```

### Headers

```http
Authorization: Bearer token
```

---

## Update Video

```http
PUT /api/videos/:id
```

---

## Delete Video

```http
DELETE /api/videos/:id
```

---

# JWT Authentication Flow

1. User logs in
2. Backend verifies credentials
3. JWT token generated
4. Token stored in localStorage
5. Token sent in Authorization header
6. Protected routes verified using middleware

---

# Screenshots

Add project screenshots here.

Example:
- Login Page
- Register Page
- Dashboard
- Add Video Page
- Video List Page

---

# Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

---

# Future Improvements

- Dark Mode
- Pagination
- Redux Toolkit
- Better Animations
- User Profile
- Video Categories Filter

---

# Author

Ajay Prajapati

Information Technology Engineering Student

---

# License

This project is created for educational and assignment purposes.