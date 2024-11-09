import React from 'react'
import axios from "axios"
import "../src/index.css"
import { useAuth } from '../src/context/AuthProvider'
import { Link } from 'react-router-dom'
export default function Signup() {

   const [authUser, setAuthUser]=useAuth()


  const handleSubmit=async(e)=>{

    e.preventDefault();
   const fullname=e.target.fullName.value
   const email=e.target.email.value
   const password=e.target.password.value
   const confirmpassword=e.target.confirmpassword.value

   if(password!=confirmpassword)
   {
    alert("password do not match")
   }
    const info={
      fullname,
    email,
    password,
    confirmpassword
    }


     await axios.post("http://localhost:7000/signup", info)
      .then((response)=>{
        console.log(response.data);
       
        if(response.data)
        {
          alert("SignUp successfull")
        }

        localStorage.setItem("studentData", JSON.stringify(response.data));
        setAuthUser(response.data)
      })
      .catch((error)=>{
        if(error.response)
        {
           alert("error:"+error.response.data.error)
        }
       
      }
      )
      

  }
  return (
   
    <div className="flex justify-center items-center min-h-screen bg-emerald-950 p-4">
  <div className="w-full max-w-md bg-emerald-300 shadow-lg rounded-lg p-6">
    <h1 className="text-2xl font-bold text-center text-emerald-950 mb-6">Sign Up</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
        <input 
          type="text" 
          placeholder="Full Name" 
          name="fullName" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Email</label>
        <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm Password" 
          name="confirmpassword" 
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="text-center mt-6">
        <input 
          type="submit" 
          value="Submit" 
          className="w-full bg-emerald-950 hover:bg-red-600 text-white font-semibold py-2 rounded-lg cursor-pointer"
        />
      </div>
    </form>
    <div className='flex space-x-3 h-full'> 
    <div>
      <p>Have an account ? <Link to={"/login"} className='text-blue-700 underline'>Login</Link></p>
    </div>
    <div>
      <Link to={"/admin"} className='text-blue-700 underline'>Login as Administrator</Link>
    </div>   
    </div>


  </div>
</div>

  )
}
