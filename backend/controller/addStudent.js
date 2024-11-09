import mongoose from "mongoose";
import Student from "../models/Student.model.js";

const adddata= async(req,res)=>{

    const {fullname,email,age,gender,phone,address,currentclass} = req.body
    try {

        const NewStudent= await new Student({
            fullname,
            email,
            age,
            gender,
            phone,
            address,
            currentclass
        })
       await NewStudent.save();
       res.status(201).json({ message: "Student added successfully", student: NewStudent });
       console.log("data saved")
    } catch (error) {
        console.log(error, "error in saving data in mongodb")
    }

}
export default adddata;