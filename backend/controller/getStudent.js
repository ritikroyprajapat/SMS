import mongoose from "mongoose"
import Student from "../models/Student.model.js"

const getStudent= async(req,res)=>{

  
    try {
         
        const students= await Student.find()
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
   
}

export default getStudent