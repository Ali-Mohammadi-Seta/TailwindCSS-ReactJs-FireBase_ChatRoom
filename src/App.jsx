import { useState } from 'react'
import React from 'react'
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Chat from "./pages/Chat.jsx";
import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./routes/PrivateRoute.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

const App = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/chat' element={<PrivateRoute><Chat/></PrivateRoute>}/>
            </Routes>



        </AuthProvider>
)}
export default App



