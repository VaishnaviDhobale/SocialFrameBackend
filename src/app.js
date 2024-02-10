import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express(); // creating a app using express

// Important middlewares 
app.use(cors()); //This middleware allow another origin to access our backend
app.use(express.json()); // This middleware allow to accept json data
app.use(cookieParser());   // Becouse of this middleware we can set secure cookies
app.use(express.urlencoded({extended : true})) // Using this middleware we can accept data from URL

// From here Routes getting start 
import { userRoute } from "./routes/user.routes.js";

app.use("/api/v1/user",userRoute); // this middleware handle user related api's
