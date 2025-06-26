const express = require("express");
const app = express();
const PORT = 3000;

// MIDDLEWARE SECTION
app.use(express.static("public")); // Serves static files like HTML, CSS, JS
app.use(express.json()); // Parses JSON from incoming requests

// Custom logger middleware                                                                 //need???
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });


// VIEW ROUTES -- typically for rendering content/pages

app.get("/", (req, res) => {
    res.send("Hello Blackjack player"); // plain text
});

// app.get("/rules", (req, res) => {
//     res.send("<h1>Rules</h1>"); // Sends basic HTML
// });

app.get("/rules", (req, res) => {
    res.sendFile(__dirname + "/public/rules.html"); // Sends a file                     //send a specific file?
});


// app.get("/story/:name/:animal/:place", (req, res) => {
//     console.log(req.params)
//     const { name, animal, place } = req.params;
//     const sentence = `${name} went to ${place} and found a magical ${animal}!`;
//     res.send(`<h2>${sentence}</h2>`);
// });


// API ROUTES -- usually used for data interaction (JSON, etc)

// Mock data -> Represents an eventual database
let users = [
    { id: 1, name: "John", email: "john@gmail.com", bank: "$1000" },
    { id: 2, name: "Jane", email: "jane@gmail.com", bank: "$1500" }
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


// CRUD
// Create/Post
// Read/Get
// Update 
// Delete 


// SERVER LISTENING
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
