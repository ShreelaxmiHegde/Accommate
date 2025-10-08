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
```
Accommate/
│
├── app.js                  # Main application file
├── models/                 
│   └── listing.js          # Mongoose schema/model for listings
|
├── init/                 
│   └── data.js             # mock data 
│   └── index.js            # connect mock data to database
|
├── public/
│   └── css/                
│       └── style.css           # Stylesheet of all routes
│   └── js/                
│       └── script.js       
|   
├── utils/                  
│   └── ExpressError.js     # custom error class
│   └── wrapAsync.js        
|
├── views/                  # Routing pages for different routes
│   ├── includes/           # template page
│   |   └── navbar.ejs           # Navbar template
│   |   └── footer.ejs           # Footer template
|   |
│   ├── error.ejs           # error template page
│   | 
│   ├── layouts/            # layout template
│   |    └── boilerplate.ejs     # Boilerplate for all 
│   |
│   └── listings/           # dashboard page
│       └── index.ejs           # dashboard page
│       └── new.ejs             # new listing page
│       └── show.ejs            # all listings page
│       └── edit.ejs            # edit page
|
├── schema.js               # template page
├── docs.md                 # project documentation
├── LICENCE
├── .gitignore
├── package.json            # Project dependencies
├── package-lock.json       # imp file to install all dependencies
└── README.md       

```

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

GET `/listings`
- Description: Retrieve all accommodation listings.
- Response: Renders the dashboard page with all listings.

GET /listings/new
- Description: Display the form to create a new listing.
- Response: Renders the new listing form page.

POST /listings
- Description: Create a new listing with user-provided data.
- Request Body:
    - listing: Object containing listing details (title, desc, location, state, price, capacity, image)
- Response: Redirects to /listings after saving.

GET /listings/:id
- Description: Show details of a specific listing.
- Params:
    - id: Listing ID
- Response: Renders the show page for the selected listing.

GET /listings/:id/edit
- Description: Display the edit form for a specific listing.
- Params:
    - id: Listing ID
- Response: Renders the edit page for the selected listing.

PUT /listings/:id
- Description: Update a specific listing with new data.
- Params:
    - id: Listing ID
- Request Body:
    -listing: Object containing updated listing details
- Response: Redirects to /listings/:id after updating.

DELETE /listings/:id
- Description: Delete a specific listing.
- Params:
    - id: Listing ID
- Response: Redirects to /listings after deletion.

---

## Contributing
- Feel free to fork the repository and submit pull requests for improvements or new features.
- Checkout the [Technical Documentation](docs.md) for clear view of the project.

---

## License
This project is open source and available under the MIT License.