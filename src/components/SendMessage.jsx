import React, {useState} from 'react'
import sendL from '../assets/sendL.png'
import sendD from '../assets/sendD.png'
import {UserAuth} from "../context/AuthContext.jsx";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import {db} from "../FireBase.jsx";


const SendMessage = () => {

    const [value, setValue] = useState("")
    const {currentUser} = UserAuth()

    const handleSendMessage = async (e) => {
        e.preventDefault()

        if(value.trim() === ""){
            alert("لطفا پیام خود را وارد کنید")
            return
        }

        try {
            const {uid, displayName, photoURL} = currentUser
            console.log('currentUser:', currentUser);

            if (!displayName) {
                // Handle case where displayName is not available
                console.log('displayName is not available');
                return;
            }
            const messageText = value;
            await addDoc(collection(db, "messages") , {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        } catch (error) {
            console.log(error)
        }
        console.log(value)
        setValue("")
    }

    return (
        <div className='bg-gray-300 fixed bottom-0 w-full py-10 shadow-lg text-black'>
            <form onSubmit={handleSendMessage} className='px-2 containerWrap flex'>
                <input value={value} onChange={e => setValue(e.target.value)}
                       className='input w-full focus:outline-none bg-white rounded-r-none ' type='text'/>
                <button type='submit'>
                    <img className=' rounded px-5  w-auto' src={sendL} alt='Send'/>
                </button>
            </form>
        </div>
    )
}
export default SendMessage
