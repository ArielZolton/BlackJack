const mongoose = require("mongoose");

// Create a simple User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: Number,
});

// Turn the schema into a model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
