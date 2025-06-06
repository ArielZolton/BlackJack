const Book = require("../models/Book");

// Create a book
exports.createBook = async (req, res) => {
    try {
        
        const book = await Book.create(req.body);
        res.status(201).json({ message: "Book created", data: book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get All Books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json({ message: "All books retrieved", data: books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Get Book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book found", data: book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Update Book
exports.updateBook = async (req, res) => {
    try {
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book updated", data: updated });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Delete Book
exports.deleteBook = async (req, res) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Book not found" });

        res.json({ message: "Book deleted", data: deleted });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a review to a book (subdocument)
exports.addReview = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book) return res.status(404).json({ message: "Book not found" });

        book.reviews.push(req.body);
        await book.save();
        res.status(201).json({ message: "Review added", data: book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a review by its ID
exports.deleteReview = async (req, res) => {
    const { bookId, reviewId } = req.params;

    try {
        const book = await Book.findById(bookId);
        if (!book) return res.status(404).json({ message: "Book not found" });

        const review = book.reviews.id(reviewId);
        if (!review) return res.status(404).json({ message: "Review not found" });

        // Remove review using pull
        book.reviews.pull(reviewId);
        await book.save();

        res.status(200).json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

