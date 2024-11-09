import React, { Children, createContext, useState,useContext } from 'react'
import cookies from "js-cookie"

export const AuthContext=createContext();


export const AuthProvider=({children})=>{

const intialUserState= cookies.get("jwt")||localStorage.getItem("studentData")

const [authUser,setAuthUser]=useState(intialUserState ? JSON.parse(intialUserState) : undefined);

return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
)

}
export const useAuth=()=>useContext(AuthContext)