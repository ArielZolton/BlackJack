const User = require("../models/User");
const Book = require("../models/Book");

//Create User
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User created", data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get All Users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ message: "All users retrieved", data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//Get User by ID
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User found", data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update User
exports.updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated", data: updated });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete User
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted", data: deleted });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Add Book Reference to User
exports.addBookToUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const book = await Book.findById(req.body.bookId);
        if (!user || !book) return res.status(404).json({ message: "User or book not found" });

        user.books.push(book._id);
        await user.save();
        res.status(201).json({ message: "Book added to user", data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get User's Books
exports.getUserBooks = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate({ path: "books", select: "-__v" }).select('-__v')
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User's books", data: user.books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
