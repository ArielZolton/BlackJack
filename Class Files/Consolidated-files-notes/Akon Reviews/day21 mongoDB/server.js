const express = require("express");

// Import and initialize the DB connection
// require("./connection/db-connection-event");
//or
const connectDB = require("./connection/db-connection-funct");
// connectDB();
//or
// const connectNativeDB = require("./connection/db-connection-mongodb");
// connectNativeDB()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

// Start the server
// app.listen(PORT, () => {
//     console.log(`🚀 Server is listening on port ${PORT}`);
// });

//Preferred when using connectDB()
async function startServer() {
    await connectDB();
    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}

startServer();