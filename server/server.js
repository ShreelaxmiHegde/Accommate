const app = require('./app');
const { connectDB } = require('./db.js');
const port = 8080;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App is listning on port ${port}`);
    });
});