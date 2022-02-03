import express from "express";
import { BookController } from "../../app_bussiness_rules/controllers/book_controller";
import { book_filter } from "../frameworks_and_drivers/middlewares/filters/book";

const book = express.Router();

const book_controller = new BookController()

book.get("/read", book_filter, book_controller.reads)
book.post("/create", book_controller.creates)
book.put("/update", book_controller.updates)
book.delete("/delete", book_controller.deletes)

export {
    book
}