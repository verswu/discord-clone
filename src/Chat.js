import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader'

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">

            </div>
            <div className="chat__input">
                
            </div>
        </div>
    )
}

export default Chat;