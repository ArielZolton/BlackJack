const express = require("express");
const app = express();
const PORT = 3000;

// ===================
// MIDDLEWARE SECTION
// ===================
app.use(express.static("public")); // Serves static files like HTML, CSS, JS
app.use(express.json()); // Parses JSON from incoming requests

// Custom logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ===================
// VIEW ROUTES
// These routes are typically for rendering content/pages
// ===================

app.get("/", (req, res) => {
    res.send("Hello World"); // Sends plain text
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>"); // Sends basic HTML
});

app.get("/portfolio", (req, res) => {
    res.sendFile(__dirname + "/public/portfolio.html"); // Sends a file
});


app.get("/story/:name/:animal/:place", (req, res) => {
    console.log(req.params)
    const { name, animal, place } = req.params;
    const sentence = `${name} went to ${place} and found a magical ${animal}!`;
    res.send(`<h2>${sentence}</h2>`);
});

// ===================
// API ROUTES
// These routes are usually used for interacting with data (e.g. JSON)
// ===================

// Mock data -> Represents an eventual database
let users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Jane", email: "jane@gmail.com" }
];

// Get all users
app.get("/api/users", (req, res) => {
    res.json(users);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.json(user);
});

// Create a new user
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const user = {
        id: users.length + 1,
        name,
        email
    };
    users.push(user);
    res.status(201).json(user);
});

// ===================
// CRUD
// ===================

// Create - Post
// Read - Get
// Update 
// Delete 


// ===================
// SERVER LISTENING
// ===================
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
