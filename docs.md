# Technical Documentaion of Accommate

## Project Structure
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
├── views/                  # Routing pages for different routes
│   └── index.ejs           # dashboard page
│   └── new.ejs             # new listing page
│   └── show.ejs            # all listings page
│   └── edit.ejs            # edit page
|
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

### Routes Structure
```
GET         `/listings`                # dashboard route
GET         `/listings/new`            # displays new listing form (user side)
GET         `/listings/:id`            # shows specific listing for edit or update works
POST        `/listings`                # save newly created listing to database
GET         `/listings/:id/edit`       # edit specific listing show form
PUT         `/listings/:id`            # update in database after edit
DELETE      `/listings/:id`            # delete specific listing

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


---

## `models/`
### 1. `listing.js` (Accommodation Listings)
- Imports: `mongoose` to interact with MonogDB

- Schema Definition :
    - `listingSchema` describes the structure of listing
    - All fields except `image` are required, which has a default URL if not provided or if an empty string is given

- Model Creation :
    - Model `Listing` created based on schema
    - Allows to perform CRUD on its collections

- Export :
    - Model exported to be used in other files like `app.js`
    - Interact with listings in database.

---

## `init/`

### 1. `data.js`
- Exports an array of sample accommodation listings.
- Provides mock data for development, testing or demo.
- (More : 
    - It exports an object with a single key `data` whose value is `sampleListing` array.
    - This is useful for exporting more properties in future or keep exports organized )

### 2. `index.js`
- Connects to MongoDB and inserts the sample listings from `data.js`.
- Initial data for development or testing.

---