import express from "express";
import morgan from "morgan";
import { connect } from "./db.js";
import booksRoutes from "./routes/books.routes.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/books", booksRoutes);

const PORT = process.env.PORT || 3000;
await connect(); // Conectar a la base de datos antes de iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});