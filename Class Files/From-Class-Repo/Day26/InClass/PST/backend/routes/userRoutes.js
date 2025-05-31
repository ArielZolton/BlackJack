// MVC - Model View Controller
// Model - Data
// View - UI this could also be json
// Controller - Logic

import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
