import mongoose from "mongoose";
import "dotenv/config";

const { MONGODB_URI, PW, DB_NAME } = process.env;
if (!MONGODB_URI) throw new Error("Falta la variable de entorno MONGODB_URI.");
if (!PW) { throw new Error("Falta la variable de entorno PW.");
}
if (!DB_NAME) { throw new Error("Falta la variable de entorno DB_NAME.");
}

const encodedPWURIComponent = (PW) => encodeURIComponent(PW);
const uri = MONGODB_URI.replace("<db_password>", encodedPWURIComponent(PW));

export async function connect() {
    await mongoose.connect(uri, { dbName: DB_NAME || "LibraryMongo" });
    console.log(`Conectado a la base de datos: ${mongoose.connection.name}`);
}