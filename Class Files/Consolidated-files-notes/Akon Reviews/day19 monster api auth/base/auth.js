module.exports = {
    apiAuth: (req, res, next) => {
        const apiKey = req.headers['x-api-key'];
        if (!apiKey || apiKey !== "1234567890") return res.status(401).send("Unauthorized");
        next();
    }
};
