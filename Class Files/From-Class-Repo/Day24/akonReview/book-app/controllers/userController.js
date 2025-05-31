import User from "../models/User.js";
import Book from "../models/Book.js";

// Create User
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User created", data: user });
    } catch ({ message }) {
        res.status(500).json({ message });
    }
};

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ message: "All users retrieved", data: users });
    } catch ({ message }) {
        res.status(500).json({ message });
    }
};

// Get User by ID
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User found", data: user });
    } catch ({ message }) {
        res.status(500).json({ message });
    }
};

// Update User
export const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
        const user = await User.findById(req.params.userId);
        const book = await Book.findById(req.body.bookId);
        if (!user || !book) return res.status(404).json({ message: "User or book not found" });

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