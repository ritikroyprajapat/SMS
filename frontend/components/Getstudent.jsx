
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddData from './AddData';
import Update from './Update';

export default function Getstudent() {


  const [students, setStudents] = useState([]);  // To store the list of students
  const [loading, setLoading] = useState(true);  // To track if the data is still being loaded
  const [error, setError] = useState(null);  // To store any error messages
  const [selectedStudent, setSelectedStudent] = useState(null);  // State for toggling student details
  const [click, setclick]=useState(false)



  // Fetch student data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:7000/student')  // Send GET request to the API
      .then((response) => {
        setStudents(response.data);  // Store the data in state
        setLoading(false);  // Stop the loading state once the data is fetched
      })
      .catch((error) => {
        setError('Failed to fetch student data');  // Handle errors
        setLoading(false);  // Stop the loading state
        console.error('Error fetching students:', error);  // Log the error to console
      });
  }, [students]);  // Empty dependency array means this effect runs only once, when the component mounts




  const toggleStudentDetails = (studentId) => {
    setSelectedStudent((prev) => (prev === studentId ? null : studentId));
  console.log(studentId)}


const toggleUpdateForm = (studentId) => {
  setSelectedStudent(studentId);  // Set the selected student for update
  setclick(!click);  // Toggle the visibility of the Update component
};



const handleDelete=async(studentId)=>{

  try {
    const response = await axios.delete(`http://localhost:7000/delet/${studentId}`);

    console.log("Student deleted:", response.data);
    
  } catch (error) {
    console.error("Error updating student:", error.response?.data || error.message);
  }
}



  if (loading) {
    return <div>Loading...</div>;  // Show loading message while the data is being fetched
  }



  if (error) {
    return <div>{error}</div>;  // Display the error message if there was an issue fetching the data
  }



  
 
  
   

  return (
   
    <div>
    <h1>Students List</h1>
    
    {students.length === 0 ? (
      <p>No students found.</p> 
    ) : (
      <table className="table-auto border-collapse w-full bg-yellow-300">
        {/* Table Header, shown only once */}
        <thead>
          <tr className="border border-slate-700">
            <th className="border border-slate-700 px-4 py-2">Fullname</th>
            <th className="border border-slate-700 px-4 py-2">Email</th>
            <th className="border border-slate-700 px-4 py-2 hidden md:table-cell">Age</th>
            <th className="border border-slate-700 px-4 py-2  hidden md:table-cell">Course</th>
            <th className="border border-slate-700 px-4 py-2  hidden md:table-cell">Phone</th>
            <th className="border border-slate-700 px-4 py-2  hidden md:table-cell">Class</th>
            <th className="border border-slate-700 px-4 py-2  hidden md:table-cell">Actions</th>
          </tr>
        </thead>
        
        {/* Table Body, each student's data in a row */}
        <tbody>
          {students.map(student => (
            <tr key={student._id} className="border border-slate-700">
              <td className="border border-slate-700 px-4 py-2"  onClick={() => toggleStudentDetails(student._id)}>{student.fullname}</td>
              <td className=" border border-slate-700 px-4 py-2"  onClick={() => toggleStudentDetails(student._id)}>{student.email}</td>
              <td className={`border border-slate-700 px-4 py-2  hidden md:table-cell ${selectedStudent === student._id ? "block" : "hidden"}`} >{student.age}</td>
              <td className={`border border-slate-700 px-4 py-2  hidden md:table-cell ${selectedStudent === student._id ? "block" : "hidden"}`}>{student.gender}</td>
              <td className={`border border-slate-700 px-4 py-2  hidden md:table-cell ${selectedStudent === student._id ? "block" : "hidden"}`}>{student.phone}</td>
              <td className={`border border-slate-700 px-4 py-2  hidden md:table-cell ${selectedStudent === student._id ? "block" : "hidden"}`}>{student.currentclass}</td>
              <td className={`border border-slate-700 px-4 py-2  hidden md:table-cell ${selectedStudent === student._id ? "block" : "hidden"}`}>
                {/* Add Update and Delete buttons */}
                <button
                  onClick={() =>  toggleUpdateForm(student._id)} 
                  className="bg-green-500 text-white px-4 py-2 mr-2 rounded"
                >
                  Update
                </button>
                
                {
                  click?(<div> <Update studentId={student._id} /></div>):("")
                }
                <button
                  onClick={() => handleDelete(student._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

{click && selectedStudent && (
        <Update studentId={selectedStudent} />
      )}
  </div>
  );
}

