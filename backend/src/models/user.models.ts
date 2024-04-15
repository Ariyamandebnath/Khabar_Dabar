import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    authOID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type:String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    }
}, {
    timestamps: true,
})


export const  User = mongoose.model("User", userSchema)