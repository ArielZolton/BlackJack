const express = require("express");
const app = express();
const monsterRouter = require("./routes/monsters");
const { apiAuth } = require("./utils/auth");
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api/monsters", apiAuth, monsterRouter);

app.get("/", (req, res) => res.send("Monster Tracker API"));

app.listen(PORT, () => {
    console.log(`Monster server running at http://localhost:${PORT}`);
});
