import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,  
    },
    password : {
        type :String,
        require : true,
    },
    contact : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    profile : {
        type: String,
        require : true
    }
});

export const UserModel = mongoose.model("User",userSchema);