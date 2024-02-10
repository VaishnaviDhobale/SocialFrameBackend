import { UserModel } from "../models/user.models.js";
import { apiResponse } from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";

export const signupController = async (req, res, next) => {
  try {
    const { username, password, name, email, contact } = req.body;
    const user = await UserModel.create({
      username,
      password,
      name,
      email,
      contact,
      // profile,
    });

    res.send(new apiResponse(200, user, "User added succsessfully!"));
  } catch (error) {
    res.send(new apiError(500, `Internal server error ${error}`));
  }
};
