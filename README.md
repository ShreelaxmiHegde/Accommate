# Accommate

## Overview
Accommate is a Node.js web application for managing accommodation listings. It allows users to view, add, and manage property listings, making it easier for students and individuals to find suitable accommodations.

---

## Features
- Connects to MongoDB for data storage
- RESTful API endpoints for listing management
- Easy integration with front-end frameworks

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Sturcture
Accommate/
│
├── app.js                  # Main application file
├── models/
│   └── listing.js          # Mongoose schema/model for listings
├── package.json            # Project dependencies
└── ...                     # Other files and folders

---

## Setup Instructions
1.Clone the repository
2.Install dependencies `npm install`
3.Start MongoDB server
    - Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017/accommate`
4.Run the application `node app.js`
5.Access API 
    - Visit [http://localhost:8080/listings] to view all listings

---

## API Endpoints
- GET /listings
    Returns all accommodation listings in the database.

- POST /listings
    (To be implemented) Adds a new listing.

---

## Contributing
Feel free to fork the repository and submit pull requests for improvements or new features.

---

## License
This project is open source and available under the MIT License.