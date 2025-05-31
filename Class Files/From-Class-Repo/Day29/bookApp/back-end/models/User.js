import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

export default mongoose.model("User", userSchema);