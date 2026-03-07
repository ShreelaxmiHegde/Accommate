const mongoose = require('mongoose');
const {connectDB} = require('../db');

// connect test DB
beforeAll(async () => {
    process.env.NODE_ENV = "test";
    await connectDB();

    await new Promise((resolve) => {
        mongoose.connection.once("open", resolve);
    })
});

// clear DB
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();

    for(const collection of collections) {
        await collection.deleteMany({});
    }
});

// close connection
afterAll(async () => {
    await mongoose.connection.close();
});