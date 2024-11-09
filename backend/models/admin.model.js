import mongoose from "mongoose";


const adminSchema= mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true})

const admin=mongoose.model("admin",adminSchema)

export default admin