const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    reviewer: String,
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  }
);

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: String,
    genre: String,
    year: Number,
    reviews: [reviewSchema],
  }
);

module.exports = mongoose.model("Book", bookSchema);
