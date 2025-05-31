const express = require("express");
const userRouter = express.Router(); // generally named as router instead of userRouter

// const userRouter = require("express").Router();

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

userRouter.get("/", (req, res) => {
    res.json(users);
})

userRouter.get("/:id", (req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
        return res.status(404).send("User not found");
    }
    res.json(user);
})

// app.use(express.json());
userRouter.post("/", (req, res) => {
    const { name, email } = req.body;
    // console.log(req.body);
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
    res.status(201).json(user);
})

// put, patch, delete 

userRouter.put("/:id", (req, res) => {
    // updates the whole user object, it needs all the fields to be sent
    // irl, you might see this Method also doing the same thing as PATCH
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
    // update the user object partially
    // you might see this implementation on the PUT method instead of PATCH
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find((user) => user.id === parseInt(id));
    
    if (!user) return res.status(404).send("User not found");
    if (name) user.name = name;
    if (email) user.email = email;
    res.json(user);
})

userRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== parseInt(id));
    res.status(204).send();
})

module.exports = userRouter;