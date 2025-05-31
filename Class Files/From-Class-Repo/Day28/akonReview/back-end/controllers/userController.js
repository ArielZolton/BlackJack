import User from "../models/User.js";
import Book from "../models/Book.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email already exists, please log in." });
    }

    // Create new user
    const newUser = new User({ username, email, password }); // Consider hashing passwords!
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: `Server Error:${error}` });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      // Consider using bcrypt for password hashing
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ userId: user._id, message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("books");
    res.json({ message: "All users retrieved", data: users });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// Get User by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("books");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User found", data: user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated", data: updated });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted", data: deleted });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// Add Book Reference to User
export const addBookToUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, author, year, genre } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the book already exists in the database using title + author
    let book = await Book.findOne({ title, author });

    if (!book) {
      book = new Book({
        title,
        author,
        genre: "Unknown",
        year:
          req.body.year && !isNaN(req.body.year)
            ? Number(req.body.year)
            : undefined, // Only set if it's a valid number
      });
      await book.save();
    }

    // Prevent duplicate additions to user's books
    if (user.books.includes(book._id)) {
      return res.status(400).json({ message: "Book already saved" });
    }

    user.books.push(book._id);
    await user.save();

    res.status(201).json({ message: "Book added to user", data: user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

// Get User's Books
export const getUserBooks = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate({ path: "books", select: "-__v" })
      .select("-__v");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User's books", data: user.books });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

export const removeBookFromUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const bookIndex = user.books.indexOf(req.params.bookId);
    if (bookIndex === -1)
      return res.status(404).json({ message: "Book not found in user's list" });

    user.books.splice(bookIndex, 1);
    await user.save();

    res.status(200).json({ message: "Book removed from user", data: user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};
