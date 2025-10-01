import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : [true, "title wajib di isi"],
            unique : true,
            trim : true

        },

        icon : {
            type : String,
            required : [true, "Icon wajib di isi"],
            unique : true,
            trim : true
        },
        url : {
            type : String,
            required : [true, "url wajib di isi"],
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

const linkModel = mongoose.Model("Link", linkSchema)
export default linkModel