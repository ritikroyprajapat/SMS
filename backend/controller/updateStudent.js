
import Student from "../models/Student.model.js";

const update = async (req, res) => {


    const {id}=req.params;
    const {fullname,age,phone,address,currentclass}=req.body;

    
    try {
        const result = await Student.updateOne(
            { _id: id },
            { $set: {fullname,age,phone,address,currentclass} }
        );

        if (result.matchedCount === 1) {
            console.log("Email updated successfully");
            res.status(200).send({ message: "Email updated successfully" });
        } else {
            console.log("No email found for update");
            res.status(404).send({ message: "No email found" });
        }
    } catch (error) {
        console.error("Error in updating email:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

export default update; // Make sure to export the correct function
