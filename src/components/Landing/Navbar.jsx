import React from 'react'
import triangle from './../../../public/images/triangle.png'
import like from './../../../public/images/like.png'
import bell from './../../../public/images/bell.png'
import message from './../../../public/images/message.png'
import chat from './../../../public/images/chat.png'
import explore from './../../../public/images/squares.png'
import './../../css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <main className='divs'>
        <nav>
            <ul>
                <li><img src={triangle} alt="anon" /></li>
                <li className='list'>
                    <li>
                        <Link to="/friends" className='friends'>
                        <img src={like} alt="anon-like" className='friend'/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/notification" className='notif'>
                        <img src={bell} alt="anon-bell" className='notifs'/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/message" className='message'>
                        <img src={message} alt="anon-message"  className='mess'/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/chat" className='chats'>
                        <img src={chat} alt="anon-chat"  className='chat'/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="/explore" className='expo'>
                        <img src={explore} alt="anon-explore"  className='expos'/>
                        </Link> 
                    </li>
                </li>
            </ul>
        </nav>
    </main>
  )
}
