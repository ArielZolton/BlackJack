import express from "express";
import { 
    createUser, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser, 
    addBookToUser, 
    getUserBooks 
} from "../controllers/userController.js";

const router = express.Router();

// /api/users
// Basic CRUD
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Book management
router.post("/:userId/books", addBookToUser);
router.get("/:userId/books", getUserBooks);

export default router;