import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
            </div>
            <div className="chat__input">
                <AddCircleIcon />
                <form>
                    <input placeholder={'Message #TestChannel'}/>
                    <button className="chat__inputButton" type='submit'>
                        Send Message
                    </button>
                </form>
                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat;
