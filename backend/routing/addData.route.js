import adddata from "../controller/addStudent.js";
import express from "express";
import { Admin, Login, Logout, SignUP } from "../controller/User.js";
import delet from "../controller/deleteStudent.js";
import update from "../controller/updateStudent.js";
import getStudent from "../controller/getStudent.js";
const router=express.Router()

router.post("/adddata", adddata);
router.post("/signup",SignUP);
router.post("/login",Login);
router.delete("/delet/:id",delet);
router.put("/update/:id",update);
router.post("/admin",Admin);
router.get("/student",getStudent);
router.post("/logout", Logout)

export default router;