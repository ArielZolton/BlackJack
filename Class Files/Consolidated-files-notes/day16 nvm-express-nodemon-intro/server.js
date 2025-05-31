// console.log("Hello World");
// import express from "express"; // ES6;
const express = require("express"); // CommonJS
const app = express();
const PORT = 3000; // dot env

app.use(express.static("public")); // name of folder generally called "public" or "static"

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {                // creates a route in the server
    res.send("Hello World");                // req, res = request, response
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page 3</h1>"); // res.send("About Page");
})

app.get("/portfolio", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/portfolio.html");
})

app.get("/api/users", (req, res) => {
    res.json(); // res.send("placeholder for user data");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})
