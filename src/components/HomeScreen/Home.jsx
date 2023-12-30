import React from 'react'
import social from './../../../public/images/social.png'
import anon from './../../../public/images/anon.png'
import './../../css/Home.css'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <main>
        <div>
            <img src={social} className='img' alt="anon"/>
        </div>
        <div>
            <div className="text">
                <h1>Welcome to <img src={anon} className='image' alt="anon"/> </h1>
                <p>Connect with others anonymously and share your thoughts without revealing your identity.
                    Anon is the perfect platform to express yourself freely.
                </p>
            <div className="btn">
                <button><Link to="/login">Log In</Link></button>
                <button><Link to="/signup">Sign Up</Link></button>
            </div>
            </div>
        </div>
    </main>
  )
}
