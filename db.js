import {MongoClient} from "mongodb";
import "dotenv/config.js";

const { MONGO_URI, PWD } = process.env;
if (!MONGO_URI) {
    throw new Error("Falta la variable de entorno MONGO_URI.");
}
if (!PWD) {
    throw new Error("Falta la variable de entorno PWD.");
}

const encodedPwd = encodeURIComponent(PWD);
const uri = MONGO_URI.replace("<password>", encodedPwd);

// Creacion del cliente de MongoDB