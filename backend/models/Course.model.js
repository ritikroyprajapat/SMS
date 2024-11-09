import mongoose from "mongoose";

const CourseSchema= mongoose.Schema({

  
    course:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true
    }
  
})

const Course=mongoose.model("Course",CourseSchema)

export default Course;