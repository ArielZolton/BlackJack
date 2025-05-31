const express = require("express");
const userRouter = express.Router(); // generally called router

// const router = require("express").Router();

// =============================
// CRUD - for data operation...
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE
// =============================

// faker - for generating fake data
// const faker = require("faker");

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

userRouter.get("/", (req, res) => {
    res.json(users);
})

userRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.json(user);
})

userRouter.post("/", (req, res) => {
    // console.log(name, email);
    const { name, email } = req.body;
    console.log(req.body);
    console.log(name, email);
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    const user = {
        id: users.length + 1,
        // name: name,
        // email: email
        name,
        email
    }
    users.push(user);
    // res.send("User created successfully");
    res.status(201).json(user);
})

userRouter.put("/:id", (req, res) => {
    // missing authorization
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    
    // validation
    if (!user) return res.status(404).send("User not found");
    if (!name || !email) return res.status(400).send("Name and email are required");
    
    // update the whole user object
    user.name = name;
    user.email = email;
    res.json(user);
    
})

userRouter.patch("/:id", (req, res) => {
    // patch updated partial user object
    // many times this will be used in the PUT request 
    // (doesn't mean that is semantically correct if done in PUT)
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    
    // validation
    if (!user) return res.status(404).send("User not found");
    
    // update if provided
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
})

userRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) return res.status(404).send("User not found");
    users = users.filter((user) => user.id !== parseInt(id));
    res.json(user);
})

module.exports = userRouter; // export the router as a module (to be used in the server.js file)