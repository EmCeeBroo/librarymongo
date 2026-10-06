import {Router} from "express";
import {getAllBook, getBookById, createBook, updateBook, deleteBook} from "../controllers/books.controller.js";

const router = Router();

router.get("/all ", getAllBook);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;