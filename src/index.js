import { app } from "./app.js";
import dotenv from "dotenv"
import { databaseConnection } from "./db/databaseConnection.js";


app.listen(process.env.PORT,()=>{
    try {
        databaseConnection();
        console.log(`Server running on port: ${process.env.PORT}`)
    } catch (error) {
        console.log(`Error during listening a request!! : ${error}`)
    }
});