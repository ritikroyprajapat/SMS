import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import addData from "./routing/addData.route.js"
import cors from "cors"
import path from "path"
// import './index.css';

const app = express();

dotenv.config(); 
app.use(express.json()); 
app.use(cors());


const PORT = process.env.PORT||7001;
const URI = process.env.MONGO_DB_URI;


try {
    mongoose.connect(URI)
    console.log("database is conneted successfully with server");
    
} catch (error) {
    console.log(error,"error in connecting with database")
}




app.use('/', addData)

//deploying code

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))