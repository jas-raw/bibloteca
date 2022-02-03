import express from "express";
import { book } from "./book_routes";
import { loan } from "./loan_routes";
import { user } from "./user_routes";

const router = express.Router();

router.use('/users', user)
router.use('/books', book)
router.use('/loans', loan)

export default router