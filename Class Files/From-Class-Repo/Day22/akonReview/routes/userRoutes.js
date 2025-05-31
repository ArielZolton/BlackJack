const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// /api/users
// Basic CRUD
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// Book management
router.post("/:userId/books", userController.addBookToUser);
router.get("/:userId/books", userController.getUserBooks);

module.exports = router;
