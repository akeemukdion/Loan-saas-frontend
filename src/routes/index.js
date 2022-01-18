import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/index'
import ErrorPage from '../Pages/error'
import LoginForm from '../Pages/Login'


const PageRoutes = () => {
    return (
        <div>
           <Routes>
               <Route path="/" element={<LoginForm/>} />
               <Route element={<ErrorPage/>} />
               <Route path="/dashboard/*" element={<Dashboard/>}/>
            </Routes> 
        </div>
    )
}

export default PageRoutes
