# [Accommate 🔗](https://accommate.onrender.com/Accommate)
**Accommate** is a student accommodation platform built with the main goal of helping students easily find and book stays near their college or campus.

It’s a Full Stack MERN application with MVC architecture deployed on Render.

---

### ✨ Features Accommate Provide
⤷ 🔐 User Authentication & Authorization for personalized experience <br>
⤷ 🏘️ Connects students directly with housing owners <br>
⤷ ⭐ Flexible ratings and reviews system <br>
⤷ ⚡ Smooth and modern browsing experience 

---

## Application Evolution Phases
- Phase1: 1.x.x
    - EJS+Bootstrap(UI) + CRUD
    - Auth(express sessions & Passport.js)
    - Client & Serverside Data Validation
    - Multer+Cloudinary Image storage
    - MongoDB Atlas ➜ Database
    - Render ➜ Deployment
- Phase2: 2.x.x
    - React.js + MUI(UI) ➜ **EJS Migration**
    - Vercel(frontend) + Render(backend) ➜ Deployment
- Phase3: 3.x.x
    - Dockerize application (multi-stage builds)
    - dev and prod separate containerization
- Phase4: 4.x.x
    - CICD
        - Component testing
        - Unit testing
    - AWS EC2 ➜ Deployment

---

## ⚙️ Local Setup Instructions
### 1. Clone the repository 
```
git clone https://github.com/your-username/Accommate.git
cd Accommate
```

### 2. Setup Environment variables
- create `.env` file inside `/server`
- Add following credentials insed .env file:
    - ATLASDB_URL=mongodb://localhost:27017/your-db
    - SESSION_SECRET=yoursecret

### 3. Setup backend (server)
```
cd server
npm ci #install dependencies
npm run dev #run dev server
```
Backend runs on http://localhost:8080

### 4. Setup Frontend (client)
```
cd client
npm ci
npm run dev
```
Frontend runs on http://localhost:5173

---

## 🐋 Docker Container Setup
### 1. Clone the repository 
```
git clone https://github.com/your-username/Accommate.git
cd Accommate
```

### 2. Setup Environment Variables
Create a `.env` file in the root directory:

MONGODB_URI=mongodb://mongodb:27017/your-db

### 3. Start Containers
```
docker-compose up --build
```
- Hot reload enabled
- Services run on:
    - Frontend: http://localhost:5173  
    - Backend: http://localhost:8080

---

## Docker Production Image
Production images are built using multi-stage Docker builds and pushed via CI/CD.

Pull latest image:
```
docker pull shreelaxmihegde/accommate-frontend:latest
docker pull shreelaxmihegde/accommate-backend:latest
```

---

## 📄 License
This project is open source and available under the <b>MIT License</b>.

---

> This project is most likely a platform where I do **experimental** works with the techniques/convensions that **real-world applications** follow.