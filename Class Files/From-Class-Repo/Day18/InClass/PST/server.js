// import express from "express"; // ES6
const express = require("express"); // CommonJS
const app = express();
const userRouter = require("./user");
const { auth } = require("./auth");
const PORT = 3000; // dot env

app.use(express.static("public"));
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(loggingMiddleware);

// app.use(auth); // this will be applied to all the routes

app.use("/api/users", auth, userRouter);

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


app.get("/api/temp", (req, res) => {
    // console.log(req);
    console.log("query", req.query);
    console.log("params", req.params);
    console.log("body", req.body);
    console.log("headers", req.headers);

    res.send("Hello World");
})




app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})