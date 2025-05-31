// module.exports = function authHeader(req, res, next) {
//     //...
// }

module.exports = {
    apiAuth: function(req, res, next) {
        // x-api-key
        const apiKey = req.headers['x-api-key'];
        if (!apiKey) return res.status(401).send("Unauthorized");
        if (apiKey !== "1234567890") return res.status(401).send("Unauthorized");
        next();
    },
}