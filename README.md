# SymbiConnect – College Chat App

SymbiConnect is a real-time chat application designed for college communities. It enables secure messaging, media sharing, and seamless collaboration between students and faculty.  

## 🚀 Features
- 🔒 Secure Authentication with JWT-based login and session management  
- 💬 Real-Time Messaging using Socket.io for low-latency communication  
- 📎 Media Sharing for images, files, and attachments  
- 🎨 Modern Responsive UI with Tailwind CSS  
- ☁️ Cloud Hosted on Render with MongoDB Atlas for scalability  

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Real-Time:** Socket.io  
- **Auth:** JWT  
- **Deployment:** Render  

## 📂 Project Structure
/client -> React + Tailwind frontend
/server -> Express.js + Socket.io backend


## ⚡ Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/symbiconnect.git
   cd symbiconnect


2.Install dependencies:

cd client && npm install
cd ../server && npm install


3.Create a .env file in /server with:

MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key


4.Run the app:

# Start backend
cd server
npm start

# Start frontend (new terminal)
cd client
npm start

🔮 Future Enhancements

Group chats and channels

Push notifications

Video/voice calls integration

Admin dashboard for clubs

🤝 Contributing
Contributions are welcome! Fork this repo, raise issues, and submit PRs.


