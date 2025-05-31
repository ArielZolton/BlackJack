import express from "express";
import * as bookController from "../../controllers/bookController.js";

const router = express.Router();

// Books Routes
// /api/books
router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

// Review Routes
router.post("/:bookId/reviews", bookController.addReview);
router.delete("/:bookId/reviews/:reviewId", bookController.deleteReview);


export default router;