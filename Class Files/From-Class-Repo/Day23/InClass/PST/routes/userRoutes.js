// MVC - Model View Controller
// Model - Data
// View - UI this could also be json
// Controller - Logic

import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.post("/", userController.createUser);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;