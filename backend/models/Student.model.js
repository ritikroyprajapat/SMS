import mongoose from "mongoose";

const StudentSchema= mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,

    },
    gender:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,

    },
    address:{
        type:String,
        required:true,
    },
    currentclass:{
        type:Number,
        required:true,

    },
})

const Student=mongoose.model("Student",StudentSchema)

export default Student;