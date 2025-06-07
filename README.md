# 🚆 Train Booking App

A modern, responsive Train Booking Application built with **React.js**. This app allows users to **search trains**, **filter results** by travel class, type, and departure time, and **book tickets** with essential train details like timing, duration, and price.

---

## 📌 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Challenges & Solutions](#challenges--solutions)
- [Future Improvements](#future-improvements)
- [Demo](#demo)
- [License](#license)

---

## ✨ Features

✅ Search trains by:
- Source and destination
- Travel class (1A, 2A, 3A)
- Date and quota

✅ Real-time filtering by:
- **Travel Class**
- **Train Type** (Rajdhani, Shatabdi, etc.)
- **Departure Time Ranges**

✅ UI Highlights:
- Clean train card layout with full schedule
- Price per class displayed dynamically
- “Book Now” and “Other Details” buttons
- Fallbacks for empty search/filter results
- Mobile-responsive design

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, React Router
- **Styles:** CSS Modules
- **State Management:** useState, useEffect, useLocation
- **API:** Custom Express API hosted on Render (or Mocki.io)
- **Authentication:** Firebase (via context)

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/vnplatur/IRCTC-train-booking.git
cd train-booking-app

### 2. Install dependencies

Install all required packages:
npm install
This installs React, React Router, Firebase, and other project dependencies.

### 3. Create .env file
Create a .env file in the root and add your Firebase environment variables:

VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id

⚠️ All variables must be prefixed with VITE_ for Vite to expose them to the client.

### 4. Start the application
Run the development server:
npm run dev
Visit the app at: http://localhost:5173

📁 Project Structure
.
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md


```bash
