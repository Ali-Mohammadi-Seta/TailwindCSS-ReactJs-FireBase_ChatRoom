import React from 'react'
import {UserAuth} from "../context/AuthContext.jsx";

const Message = ({message}) => {

    const {currentUser} = UserAuth()

    return (
        <div>
            <div className={`chat ${message.uid === currentUser.uid ? "chat-start" : "chat-end"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} alt="avatar picture"/>
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}

                </div>
                <div className="chat-bubble">{message.text}</div>

            </div>

        </div>
    )
}
export default Message
