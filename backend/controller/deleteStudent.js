
import Student from "../models/Student.model.js";

const delet = async (req, res) => {

    const {id}=req.params;
    try {
        const result = await Student.deleteOne({ _id: id});
        if (result.deletedCount === 1) {
            console.log("Email deleted successfully");
            res.status(200).send({ message: "Email deleted successfully" });
        } else {
            console.log("No email found for deletion");
            res.status(404).send({ message: "No email found" });
        }
    } catch (error) {
        console.error("Error in deleting email:", error);
        res.status(500).send({ message: "Internal server error" });
    }
};

export default delet;
