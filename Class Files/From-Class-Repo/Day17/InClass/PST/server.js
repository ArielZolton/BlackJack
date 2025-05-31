// import express from "express"; // ES6
const express = require("express"); // CommonJS
const app = express();
const PORT = 3000; // dot env

app.use(express.static("public"));
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World 3");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.get("/portfolio", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/public/portfolio.html");
})

// =============================
// CRUD -> Data Operations
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE
// =============================

let users = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@gmail.com"
    },
]

// REST API

app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.json(user);
})

// app.use(express.json());
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    // console.log(req.body);
    console.log(name, email);
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const user = {
        id: users.length + 1,
        name: name,
        email: email
    }
    users.push(user);
    res.status(201).json(user);
})

// put, patch, delete 



app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})