import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config(); 
const createTokenAndSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId}, process.env.JWT,{
        expiresIn:"10d"
    });

    res.cookie("JWT",token,{
        httpOnly:true,
        secure:true,
        sameSie:"strict"
    })
}
export default createTokenAndSaveCookie;