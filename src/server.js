import express from "express";
import { connect } from "./db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json({ ok: true, api: "Library Mongo" }));

const PORT = process.env.PORT || 3000;
await connect(); // Conectar a la base de datos antes de iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});