import express from "express";
import userRoutes from './userRoutes.js'
import bookRoutes from './bookRoutes.js'

const router = express.Router();

router.use('/users', userRoutes);
router.use('/books', bookRoutes);


export default router
