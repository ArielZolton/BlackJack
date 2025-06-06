import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    balance: {type: Number, default: 0, min: 0},
    assets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Asset"}]
});

// const User = mongoose.model("User", userSchema, "users"); // this is this is declaring the collection name explicitly
const User = mongoose.model("User", userSchema); // this is deducing the collection name from the model name ////implicitly declaring the collection name

export default User;