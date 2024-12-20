
import React,{Fragment} from "react"
import { AdminLogin } from "./components/forms/admin/adminLogin"

import { SignUp } from "./components/pages/welcome";
import { Routes, Route, } from "react-router-dom";
import { UserLogin } from "./components/forms/user/userLogin";
import { UserRegister } from "./components/forms/user/userRegister";

import { Toaster } from "react-hot-toast"


export const App:React.FC = React.memo(()=>{


  return ( 
    <Fragment>
        <Toaster position="top-center" />
        <Routes>
        <Route path="/" element={<SignUp/>} /> 
        <Route path="/admin/register" element={<AdminLogin/>} /> 
        <Route path="/admin/login" element={<AdminLogin/>} /> 





        
        <Route path="/user/login" element={<UserLogin/>} /> 
        <Route path="/user/register" element={<UserRegister/>} /> 
   
      </Routes>
    </Fragment>
  )

})