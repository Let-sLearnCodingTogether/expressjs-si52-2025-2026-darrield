import mongoose, { mongo } from "mongoose";
import UserModel from "./userModel";

const profileSchema = new mongoose.Schema(
    {
        displayName : {
            type : String,
            required : true
        },

        profilePicture : {
            type : String,
            required :  [true, "Profile Picture wajib di isi"],
        },
        bio :{
            type : String,
            minLength : [10, "minimal 10 karakter"],
            maxLength : [150, "maximal 150 karakter"],
            required: [true, "bio wajib di isi"],
            trim : true
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true
        }

    },
    {
        timestamps : true
    }
)

const profileModel = mongoose.Model("Profile", profileSchema)

export default profileModel