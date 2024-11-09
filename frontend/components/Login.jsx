import React from 'react'
import axios from "axios"
import { useAuth } from '../src/context/AuthProvider'
import { Link } from 'react-router-dom'
export default function Login() {
  
  const [authUser,setAuthUser]=useAuth()

  const handleSubmit=(e)=>{

    e.preventDefault();
    const info={
    email:e.target.email.value,
    password:e.target.password.value
    }


      axios.post("http://localhost:7000/login", info)
      .then((response)=>{
        console.log(response.data);
       
        if(response.data)
        {
          alert("login successfull")
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
      <div className="text-2xl font-bold text-center text-emerald-950 mb-6">Login</div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
      <div className="text-center mt-6">
        <input 
          type="submit" 
          value="Submit" 
          className="w-full bg-emerald-950 hover:bg-red-600 text-white font-semibold py-2 rounded-lg cursor-pointer"
        />
      </div>
      <div className='flex space-x-3 h-full'> 
    <div>
      <p>Don't have an account  ? <Link to={"/Signup"} className='text-blue-700 underline'>SignUP</Link></p>
    </div>
    <div>
      <Link to={"/admin"} className='text-blue-700 underline'>Login as Administrator</Link>
    </div>   
    </div>
      
      </form>
      </div>
    </div>
    
   
  )
}
