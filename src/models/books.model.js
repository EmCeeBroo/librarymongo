import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  available: { type: Boolean, required: true, default: true }
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);