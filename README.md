# 🎓 SkillSphere – Online Learning Platform

## 📌 Project Overview

SkillSphere is a modern online learning platform built with **Next.js** that allows users to explore skill-based courses, view detailed course information, and authenticate using email/password or Google Sign-In. The platform provides a responsive and user-friendly interface designed to enhance the online learning experience.

## 🚀 Live Website

**Live URL:** https://your-live-link.vercel.app

## 💻 GitHub Repository

**Repository:** https://github.com/your-username/your-repository

---

## ✨ Key Features

* 🔐 Secure authentication with BetterAuth
* 🔑 Email & Password login and registration
* 🌐 Google Social Login
* 🏠 Responsive Home page with Hero section
* 🔥 Popular Courses section showing top-rated courses
* 📚 All Courses page displaying all available courses
* 🔍 Search functionality to search courses by title
* 🔒 Protected Course Details page for authenticated users
* 👤 My Profile page displaying logged-in user information
* ✏️ Update Profile feature for changing name and profile image
* 📌 Learning Tips section
* 🏆 Top Instructors section
* 📈 Trending Courses section
* 🔔 Toast notifications for authentication and actions
* ⏳ Loading indicators during data fetching
* ❌ Custom Not Found (404) page
* 📱 Fully responsive design for mobile, tablet, and desktop devices

---

## 🛠️ Technologies Used

* Next.js (App Router)
* React
* Tailwind CSS
* DaisyUI
* BetterAuth
* MongoDB
* Motion / Swiper.js (if used)
* React Icons
* Lucide React

---

## 📦 NPM Packages Used

* next
* react
* react-dom
* tailwindcss
* daisyui
* better-auth
* @better-auth/mongo-adapter
* mongodb
* motion (or framer-motion)
* swiper
* react-icons
* lucide-react
* sonner (or react-hot-toast)
* clsx

> Update this list to match the packages actually installed in your project.

---

## 📂 Project Structure

```text
src/
 ├── app/
 ├── components/
 ├── lib/
 ├── data/
 ├── providers/
 ├── hooks/
 └── middleware.js
```

---

## 🔑 Environment Variables

Create a `.env.local` file and configure the following variables:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

For production, update `BETTER_AUTH_URL` to your deployed domain.

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
```

Move into the project directory:

```bash
cd your-repository
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🎯 Assignment Features Implemented

* ✅ Responsive layout
* ✅ Persistent Navbar & Footer
* ✅ Home page with Hero section
* ✅ Popular Courses
* ✅ Learning Tips
* ✅ Top Instructors
* ✅ Trending Courses
* ✅ All Courses page
* ✅ Protected Course Details page
* ✅ Login & Registration
* ✅ Google Authentication
* ✅ My Profile
* ✅ Update Profile
* ✅ Search by Course Title
* ✅ Toast Notifications
* ✅ Loading States
* ✅ Custom 404 Page
* ✅ Clean Next.js App Router Structure

---

## 👨‍💻 Developed By

Abdullah Al Noman
