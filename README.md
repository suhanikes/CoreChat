**Overview**
Our Real-Time Chat App is a modern and interactive messaging platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.io for real-time communication. It offers a sleek UI/UX powered by TailwindCSS and DaisyUI.
This chat app allows users to sign up, log in, and chat instantly with other users. It supports real-time messaging, online user status, authentication & authorization with JWT, and cloud-based media storage using Cloudinary. The global state is efficiently managed using Zustand, ensuring smooth user experience.

**TECHNOLOGIES USED:**

**Frontend**: React.js, Zustand (for state management)

**Backend**: Node.js, Express.js

**Database**: MongoDB 

* **Real-time Communication**: Socket.io
* 
* **Authentication & Security**: JWT (JSON Web Token), bcrypt.js for password hashing
* 
* **UI & Styling: TailwindCSS**, DaisyUI
* 
* **Image & File Uploads**: Cloudinary
* 
* **Deployment**: Hosted on Render
* 
* **API Testing & Development**: Postman (for API testing)
* 

**FEATURES:**
✅ **User Authentication & Authorization** – Secure sign-up & login using JWT (JSON Web Tokens).
✅ **Real-Time Messaging** – Instant chat functionality using Socket.io.
✅ **Online User Status** – See who’s online in real time.
✅ **Message Storage** – All chats are stored securely in MongoDB.
✅ **Media Uploads** – Upload and send images via Cloudinary.
✅ **Modern UI/UX** – Styled with TailwindCSS and DaisyUI.
✅ **Global State** Management – Powered by Zustand for better performance.
✅ **Light & Dark Mode** – Toggle between themes for a better user experience.
✅ **Deployment**: Hosted on Render for easy and free deployment.

Getting Started- How to run this project on your local machine
**Setup .env file**
````bash
MONGODB_URI=...
PORT=5001
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
NODE_ENV=development
````
Build the app
````bash
npm run build
````
Start the app
````bash
npm start
````

