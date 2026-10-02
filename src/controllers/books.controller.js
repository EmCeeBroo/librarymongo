import { Book } from "../models/books.model.js";

export const getAllBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "No se ha encontrado el libro" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Libro creado correctamente", book });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after", runValidators: true });
    if (!book) {
      return res.status(404).json({ error: "El id del libro no existe" });
    }
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "No se ha encontrado el libro" });
    }
    res.json({ message: "El libro ha sido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};