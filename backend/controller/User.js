import { json } from "express";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generatetoken.js";
import admin from "../models/admin.model.js";

export const SignUP= async(req,res)=>{

    const {fullname,email,password,confirmpassword}=req.body

    try {

        if(password!=confirmpassword)
            {
                return res.status(400).json({error:"password do not match"})
            }

        const user=await User.findOne({email})
            if(user)
            {
               return res.status(400).json({error:"user already registerd"})
            }
          
        const hashedPassword= await bcrypt.hash(password,10)
        
        const NewUser= await new User({
            fullname,
            email,
            password:hashedPassword
        })
        await NewUser.save()
        
        if(NewUser)
            {
             createTokenAndSaveCookie(NewUser._id,res)
             res.status(201).json({message:"user created successfully",user:{
                 _id:NewUser._id,
                 fullname:NewUser.fullname,
                 email:NewUser.email,
             }})
 
            }

    } catch (error) {
     
        console.log(error,"error in Signup")
    }
}
  

export const Login = async(req,res)=>{
    const {email,password}=req.body
    try {
        
        const user= await User.findOne({email})
        if(!user)
        {

            return res.status(400).json({error:"user not found"})
            
            
        }

        const isMatch= await bcrypt.compare(password, user.password)

        if(!isMatch)
            {
                return res.status(401).json({error:"password do not match"})
                console.log("password do not match")
            }
    
            createTokenAndSaveCookie(user._id, res);
            res.status(200).json({
                message: "User logged in successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            });

    } catch(error) {
        console.log(error,"error in login")
       return res.status(500).json({error:"error in login"})
    }
}



export const Admin = async(req,res)=>{
    const {email,password}=req.body
   try{


    const admindata= await admin.findOne({email})
    if(!admindata)
    {
           return res.status(404).json({error:"email not found"});
    }
    const ismatch =()=>{ if(password==admindata.password){
        ismatch=true;
    }}

    if(!ismatch)
    {
        return res.status(404).json({error:"password does,nt match"});
    }
    
    createTokenAndSaveCookie(admindata._id, res);
    res.status(200).json({
        message:"admin logged in successfully"
    })

    } catch(error) {
        console.log(error,"error in login")
       return res.status(500).json({error:"error in login"})
    }
}


export const Logout=(req,res)=>{

try {
    
    res.clearCookie("jwt")
    res.status(200).json({message:"user Logged Out Successfully"});
} catch (error) {
 console.log(error);
 res.status(500).json({error:"Internam server error"});   
}
}