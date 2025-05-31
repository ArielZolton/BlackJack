// console.log("Hello World");
const express = require("express");
const app = express();
const userRouter = require("./users");
const { apiAuth } = require("./auth");
const PORT = 3000;

app.use(express.static("public")); // name of folder generally called "public" or "static"
app.use(express.json()); // for allow us to parse the body of the request as json format

//app.use(apiAuth); // for every request
app.use("/api/users", apiAuth, userRouter);

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Page 3</h1>");
})

app.get("/portfolio", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/public/portfolio.html");
})


// app.use(express.json());




// passing data from client to server
// query params
// body params
// path params
// headers

app.get("/api/temp/", (req, res) => {
    // console.log(req);
    console.log("Query", req.query);
    console.log("Body", req.body);
    console.log("Params", req.params);
    console.log("Headers", req.headers);
    
    const { name, email } = req.query;
    console.log(name, email);
    res.send("Hello World");
    
})




app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
})