import React from 'react'
import axios from 'axios';
import Cookies from "js-cookie"
function Logout() {

    const handleLogout=async()=>{
        try {
            
          await axios.post("http://localhost:7000/logout");
          localStorage.removeItem("studentData");
          Cookies.remove("jwt")
          alert("user logged out successfully")
          window.location.reload();
        } catch (error) {
          console.log("error in logout",error)
        }
        }
  

  return (
    <div>
      <button  className="text-white hover:bg-blue-500 p-2 rounded"  onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
