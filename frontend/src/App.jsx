import { useState } from 'react'
import "./index.css"
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import Home from '../components/Home.jsx'
import Admin from '../components/Admin.jsx'
import { useAuth } from './context/AuthProvider.jsx'
import { Navigate, Route, Routes } from "react-router-dom"
import Logout from '../components/Logout.jsx'
import Ugetstudent from "../components/Userpage/Ugetsudent.jsx"
import UHome from '../components/Userpage/UHome.jsx'
function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)

  return (
    <>
      <div>
        {/* <h1>app</h1> */}
        {/* <Login/> */}
        {/* <Admin/> */}
        {/* <Signup/> */}
        {/* <UHome/> */}

        <Routes>
          
          <Route path='/' element={authUser ? ( <Home /> ) :( <Navigate to={"/login"}/>)}/>
          <Route path='/home' element={authUser ? ( <UHome /> ) :( <Navigate to={"/login"}/>)}/>
          <Route path='/login' element={ authUser?<Navigate to="/home"/>:<Login/> }/>
          <Route path='/signup' element={ authUser?<Navigate to="/home"/>:<Signup/> }/>
          <Route path='/admin' element={ authUser?<Navigate to="/"/>:<Admin/> }/>
         <Route path='/logout' element={authUser?<Navigate to="/"/>:<Logout/>}/>
         
        </Routes>



    
      </div>
    </>
  )
}

export default App
