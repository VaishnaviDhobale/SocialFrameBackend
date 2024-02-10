import mongoose from "mongoose";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  profile: {
    type: String,
    require: true,
  },
});


// pre-defined methods
// This method will run before the save opration gets done basically this is for hashing a password
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hashSync(this.password, 10);
    next();
  } catch (error) {
    throw error;
  }
});

// Custom methods
// This is for check user entered correct password or not.
userSchema.methods.checkValidUser = function (password) {
    try {
        let isValid = bcrypt.compare(password,this.password);
        return isValid;
    } catch (error) {
        throw error
    };
};

// This methos is for generate access token using json-web-token
userSchema.methods.generateAccessToken =  async function () {
    return await jwt.sign({
        _id : this._id,
        username : this.username
    },
    process.env.AccessTokenSecret,
    {
        expiresIn : process.env.AccessTokenExpiresIn
    }
    );
};

export const UserModel = mongoose.model("User", userSchema);
