import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config("./.env")

export const databaseConnection = () => {
    try {
            let connection = mongoose.connect(process.env.MONGO_URL)
            return connection;
    } catch (error) {
            console.log(`Error during database connection!! : ${error}`)
    }
}