import {MongoClient} from "mongodb";
import "dotenv/config";

const { MONGODB_URI, PW } = process.env;
if (!MONGODB_URI) {
    throw new Error("Falta la variable de entorno MONGODB_URI.");
}
if (!PW) {
    throw new Error("Falta la variable de entorno PW.");
}

const encodedPW = encodeURIComponent(PW);
const uri = MONGODB_URI.replace("<db_password>", encodedPW);

// Creacion del cliente de MongoDB
const client = new MongoClient(uri);
let db;

export async function connect() {
    if (!db) {
        await client.connect();
        db = client.db(process.env.DB_NAME || "librarymongo");
        console.log(`Conectado a la base de datos: ${db.databaseName}`);
    }
    return db;
}

export function getDb() {
    if (!db) 
        throw new Error("No se ha establecido la conexión a la base de datos. Llama a connect() primero.");
        return db;
}