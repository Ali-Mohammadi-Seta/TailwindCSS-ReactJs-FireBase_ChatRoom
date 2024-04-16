import React, {useEffect} from 'react'
import {UserAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const {currentUser, signInWithGoogle} = UserAuth()
    console.log(currentUser)
    const handleLogin = async () => {
        try {
            await signInWithGoogle()
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (currentUser) {
            navigate("/chat")
        }
    }, [currentUser])


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 dir='rtl' className="text-5xl font-bold">سلام!👋</h1>
                    <p dir='rtl' className="py-6">با وارد شدن به چت روم یک مکالمه را شروع و با افراد جدیدی آشنا و یک
                        مکالمه را در محیطی مشترک آغاز کنید!</p>
                    <button onClick={handleLogin} className="btn btn-primary">Login With GOOGLE</button>
                </div>
            </div>
        </div>
    )
}
export default Login
