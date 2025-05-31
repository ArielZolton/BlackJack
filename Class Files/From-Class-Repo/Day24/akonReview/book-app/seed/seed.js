import mongoose from "mongoose";
import "dotenv/config";
import Book from "../models/Book.js";
import User from "../models/User.js";
import books from "./data/books.json" with { type: "json" };
import users from "./data/users.json" with { type: "json" };


const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase";
// const {MONGO_URI ="mongodb://localhost:27017/myDatabase"} = process.env ;


const seedDatabase = async () => {
  try {
      await mongoose.connect(MONGO_URI);
      console.log("✅ Connected to MongoDB");

      await Book.deleteMany({});
      await User.deleteMany({});
      console.log("🗑 Cleared old data");

      const insertedBooks = await Book.insertMany(books);
      console.log("📚 Books inserted successfully");

      const updatedUsers = users.map(user => {
          const assignedBookTitles = user.books; 

          user.books = insertedBooks
              .filter(book => assignedBookTitles.includes(book.title))
              .map(book => book._id);

          return user; 
      });

      await User.insertMany(updatedUsers);
      console.log("👥 Users inserted successfully with book references");

      process.exit(0);
  } catch (error) {
      console.error("❌ Seeding failed:", error.message);
      process.exit(1);
  }
};

seedDatabase();

