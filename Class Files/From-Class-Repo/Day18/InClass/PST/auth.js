// module.exports = function auth(req, res, next) {

module.exports = {
    auth: function (req, res, next) {
        const apiKey = req.headers["x-api-key"];
        // const authHeader = req.headers["Authorization"];
        if (apiKey === "1234567890") {
            next();
        } else {
            res.status(401).send("Unauthorized");
        }
    }
}