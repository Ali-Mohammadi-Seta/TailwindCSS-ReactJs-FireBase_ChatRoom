import React from 'react'
import {UserAuth} from "../context/AuthContext.jsx";

const Navbar = () => {

    const {currentUser, signOutWithGoogle} = UserAuth()
    const handleLogOut = async () => {
        try {
            await signOutWithGoogle()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
            <div className="containerWrap flex justify-between">
                {currentUser ? <button onClick={handleLogOut}>LogOut</button> : ""}
                <button className="btn btn-ghost text-xl">چت روم</button>

            </div>
        </div>
    )
}
export default Navbar
