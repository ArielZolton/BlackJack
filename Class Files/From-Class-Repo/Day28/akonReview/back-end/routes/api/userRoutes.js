import express from "express";
import { 
    createUser,
    loginUser, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser, 
    addBookToUser, 
    getUserBooks ,
    removeBookFromUser
} from "../../controllers/userController.js";

const router = express.Router();

// /api/users
// Basic CRUD
router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Book management
router.post("/:userId/books", addBookToUser);
router.get("/:userId/books", getUserBooks);
router.delete("/:userId/books/:bookId", removeBookFromUser);

export default router;