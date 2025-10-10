# Technical Documentaion of Accommate

## Project Structure
```
Accommate/
│
├── app.js                  # Main application file
├── models/                 
│   └── listing.js          # Mongoose schema/model for listings
│   └── review.js           # schema for ratings and comments
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
│   ├── errors              # error template page
│   |   └── error.ejs           # Navbar template
│   |   └── pageNotFound.ejs    # Footer template
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

## `app.js`
- Sets up an Express.js server on port 8080.
- Connects to MongoDB database using Mongoose.
- `Listing` is a Mongoose model imported from `listing.js` that interacts with the listings collection in MongoDB.
- Have Form and Review data validation middlewares

### Routes Structure
```
GET         `/listings`                # dashboard route
GET         `/listings/new`            # displays new listing form (user side)
GET         `/listings/:id`            # shows specific listing for edit or update works
POST        `/listings`                # save newly created listing to database
GET         `/listings/:id/edit`       # edit specific listing show form
PUT         `/listings/:id`            # update in database after edit
DELETE      `/listings/:id`            # delete specific listing

POST        `/listings/:id/reviews`             # save newly created review to database
DELETE      `/listings/:id/reviews/:reviewId`   # delete specific review

```
- ** `/listings` (dashboard route)
    - async function => to handle database queries which are asynchronous.
    - (Asynchronus queries take time to complete and return a promise. Using `async` allows to use `await` to wait for the query to finish before continuing )
    - Listing retrieves all listings

- ** `req.body.listing` in `POST => /listings` is short way of `let { title, desc, location, state, price, capacity, image } = req.body;`

    - `const newlisting = new Listing(req.body.listing);` // creating new listing and saving it to the database.

- ** The `{ ...req.body.listing }` in `await Listing.findByIdAndUpdate(id, { ...req.body.listing });` means:
    - take all fields submitted in the form 
    - create a new object with those fields
    - use that obj to update the listing in the database

- WorkFlow : `/listings/:id/reviews`
    1. Find listing by its ID
    2. Create a new review document using Review model & the submitted review data.
    3. Push new review into listings's array(review referece is stored in listings)
    4. Save the new review to collection.
    5. Save the updated listing.
    6. Redirect to the specific listing's page.

- WorkFlow : `/listings/:id/reviews/reviewId`
    1. Fetch listing ID and review ID from params
    2. Update listing by removing the review reference
    3. Delete the review from database
    4. Redirect to the page `/listings/:id`


---

## `models/`
- Imports: `mongoose` to interact with MonogDB

### 1. `listing.js` (Accommodation Listings) :
- Schema Definition :
    - Describes the structure of listing
    - All fields except `image` are required, which has a default URL if not provided or if an empty string is given

- Model Creation :
    - Model `Listing` created based on schema
    - Allows to perform CRUD on its collections

- Export :
    - Model exported to be used in other files like `app.js`
    - Interact with listings in database.

- Middleware : (Listing model with Cascade delete reviews)
    `listingSchema.post()` middleware is internally invoked after `findByIdAndDelete` method called.
    - Workflow :
        1. Find matching Id in reviews array of the specific listing.
        2. Delete all reviews

### 2.`reviews.js` (Ratings and comments) :
- Schema Definition :
    - Describes rating and comment sturctures
    - Rating range should be in between 1 to 5
    
---

## `init/`

### 1. `data.js` :
- Exports an array of sample accommodation listings.
- Provides mock data for development, testing or demo.
- (More : 
    - It exports an object with a single key `data` whose value is `sampleListing` array.
    - This is useful for exporting more properties in future or keep exports organized )

### 2. `index.js` :
- Connects to MongoDB and inserts the sample listings from `data.js`.
- Initial data for development or testing.

---

## `views/`

### 1. `includes/` :
This folder contains reusable template components:
- `footer.ejs`: Shared footer for all pages.
- `navbar.ejs`: Shared navigation bar for all pages.

### 2. `layouts/` :
This folder contains layout templates:
- `boilerplate.ejs`: The main layout template that wraps all route pages. 
- It automatically includes the navbar and footer from the `includes/` folder, and injects the unique content of each route page into the body section. 
- This approach improves code readability and reduces redundancy by centralizing common page structure.

### 3. `listings/`
Contains EJS template files for all pages related to accommodation listings.

### 4. `errors/`
EJS template file to display error messages. Typically rendered by error-handling middleware whenever error occurs, such as validation failure, a missing page or a server issue. It can display error details like error status code, message etc.

---


## `public/` (static files)

### `css/style.css`
File that contains whole project stylings

### `js/script.js`
Form validations script for both client and server-side validations.
Used in dynamic rendering of form errors.

---

## `utils/`
Stores reusable helper funcions and classes.

### `ExpressError.js`
Exports custom error class which extends Express's `Error` class. This helps our error handling middleware respond with the correct status code and message.

### `wrapAsync.js`
Typically exports a utility function that wraps async route handlers in Express. Its purpose is to catch errors in async functions and pass them to Express's error-handling middleware, so we don't need to use try/catch every route.

<b>How it works : </b>
- We pass your async function to `wrapAsync`.
- If the async function throws an error or rejects a promise, `wrapAsync` cathces it and calls `next(err)`.

This keeps route code clean and ensures all async errors are handled properly.

---

## `schema.js`
Defines server-side validation rules for form fields using Joi package. When creating or editing a listing, the application uses these <b>Joi</b> schemas to valdiate the submitted data before saving it to the database. If the data does not meet the schema requirements, an arror is generated and the listing is not stored.

*The error is generally throwed from our custom error class `ExpressError`.

`listingSchema` : Validates submitted data while creating or editing a listing.

`reviewSchema` : Validates rating and comments submitted from specific listings.

---