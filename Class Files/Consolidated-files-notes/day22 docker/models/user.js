const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    balance: {type: Number, default: 0, min: 0},
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset"}]
});

// const User = mongoose.model("User", userSchema, "users"); // this is declaring the collection name explicitly
const User = mongoose.model("User", userSchema); // this is implicitly declaring the collection name

module.exports = User;