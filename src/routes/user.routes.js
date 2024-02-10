import { signupController } from "../controllers/user.controllers.js";
import { Router } from "express";
import { upload } from "../middlewares/multer.midleware.js";

export const userRoute = Router();

userRoute.route("/signup").post(upload.single("profile"), signupController);
