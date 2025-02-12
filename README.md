# 🏨 Hotel Booking Platform

![Hotel Booking Banner](https://i.ibb.co/whQL2XNb/Screenshot-218.png)

## 🚀 Project Overview
The **Hotel Booking Platform** is a modern web application that provides users with a seamless experience for discovering and booking hotel rooms. It combines interactive design, secure authentication, and efficient booking management to enhance user experience.

---

## 🌐 Live Demo
🔗 [Hotel Booking Platform - Live](#) *(https://hotel-room-booking-8fc54.web.app/)*

---

## ✨ Key Features

### 🏡 Homepage Design
- **Dynamic Banner**: A slider section with a title, description, and a call-to-action button.
- **Interactive Map**: Displays hotel locations using `react-leaflet`.
- **Featured Rooms**: Highlights six top-rated rooms with images, descriptions, and booking options.
- **User Reviews**: Authentic testimonials displayed in a sorted format.
- **Special Offers**: Engaging modal pop-ups showcasing promotions.

### 🔑 User Authentication
- Secure **email/password-based login**.
- Social login (Google/GitHub).
- Password validation ensuring security.
- Toast notifications for authentication actions.

### 🧭 Navigation Bar
- Links to "Rooms" and "My Bookings".
- Conditional rendering for authenticated users.

### 🛌 Rooms Page
- Displays all available rooms with detailed information.
- Clicking a room opens its **details page**.
- Users can filter rooms based on **price range**.

### 🏡 Room Details Page
- Shows room description, price, and user reviews.
- **Booking System**: Allows users to book rooms with a date selector.
- **Availability Check**: Ensures rooms are not double-booked.

### 📋 My Bookings Page
- Displays rooms booked by the user.
- **Cancel Booking**: Users can cancel bookings before the due date.
- **Modify Booking Date**: Users can update their booking date.
- **Review System**: Users can rate and review booked rooms.

### 🔐 Access Control
- Guests can only view room details but cannot book rooms.
- **Private Routes** for authenticated users.

### 🚀 Additional Features
- **404 Page**: Custom error page with a fun GIF and redirect option.
- **JWT Authentication**: Secure user sessions using JSON Web Tokens.
- **Sorting & Filtering**: Reviews sorted in descending order based on timestamps.

---

## 🛠️ Technologies & Packages Used
- **Frontend**: React, Tailwind CSS, DaisyUI, Framer Motion
- **Authentication**: Firebase (email/password, Google, GitHub)
- **Database**: MongoDB
- **Backend**: Node.js, Express.js
- **State Management**: React Query (TanStack Query)
- **Map Library**: `react-leaflet`
- **Helmet**: SEO and metadata management
- **Moment.js**: Date manipulation
- **JWT**: Authentication & authorization

---

## 📂 Folder Structure
```
📂 hotel-booking-platform
├── 📂 client  (Frontend)
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── utils
├── 📂 server  (Backend)
│   ├── routes
│   ├── models
│   ├── controllers
│   ├── middleware
│   ├── config
```

---

## 📝 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/SumiyaRahman/hotel-booking-client.git
   ```
2. Install dependencies:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Create `.env` files for Firebase & MongoDB configuration.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Access the website at `https://hotel-room-booking-8fc54.web.app/`

---

## 📌 Contribution Guidelines
- Create meaningful commits with descriptive messages.
- Ensure responsive design on mobile, tablet, and desktop.
- Maintain code readability and proper alignment.


🚀 Happy Coding!
