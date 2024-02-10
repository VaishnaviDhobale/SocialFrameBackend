import { UserModel } from "../models/user.models.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import { uploadOnCloudinaryAndGetPublicUrlOfFiles } from "../utils/cloudinary.js";

export const signupController = async (req, res, next) => {
  try {
    let profile = await uploadOnCloudinaryAndGetPublicUrlOfFiles(req.file.path);

    if(!profile.url){
      res.send(new apiError(500, `Profile photo don't getting upload on coudinatry`));
    } 

    const { username, password, name, email, contact } = req.body;
    const user = await UserModel.create({
      username,
      password,
      name,
      email,
      contact,
      profile : profile.url,
    });

    res.send(new apiResponse(200, user, "User added succsessfully!"));
  } catch (error) {
    res.send(new apiError(500, `Internal server error ${error}`));
  }
};
