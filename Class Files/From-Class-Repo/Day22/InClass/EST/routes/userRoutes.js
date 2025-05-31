// MVC - Model View Controller
// Model - Data
// View - UI this could also be json
// Controller - Logic

const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// router.get("/", );
router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;