
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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


  if (loading) {
    return <div>Loading...</div>;  // Show loading message while the data is being fetched
  }



  if (error) {
    return <div>{error}</div>;  // Display the error message if there was an issue fetching the data
  }



  
 
  
   

  return (
   
    <div>
    <center><h1>Students List</h1></center>
    
    {students.length === 0 ? (
      <p>No students found.</p> 
    ) : (
      <table className="table-auto border-collapse w-full">
        {/* Table Header, shown only once */}
        <thead>
          <tr className="border border-slate-700">
            <th className="border border-slate-700 px-4 py-2">Fullname</th>
            <th className="border border-slate-700 px-4 py-2">Email</th>
            <th className="border border-slate-700 px-4 py-2 hidden md:table-cell">Age</th>
            <th className="border border-slate-700 px-4 py-2  hidden md:table-cell">Gender</th>
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
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
}

