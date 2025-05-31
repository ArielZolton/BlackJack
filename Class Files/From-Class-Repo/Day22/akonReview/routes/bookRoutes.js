const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

//Books Routes
///api/books
router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

//Review Routes
router.post("/:bookId/reviews", bookController.addReview);
router.delete("/:bookId/reviews/:reviewId", bookController.deleteReview);

module.exports = router;
